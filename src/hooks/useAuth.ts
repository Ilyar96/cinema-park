import { useCallback, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
	User,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "@/api/firebase";
import { isFirebaseError } from "@/@types";
import { errorHandler } from "@/helpers";
import { COOKIE_USER_ID_KEY, USERS_COLLECTION_PATH } from "@/constants";
import {
	UploadTaskSnapshot,
	getDownloadURL,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import { useActions } from "./useActions";
import { IUser } from "@/@types/user";
import { RegisterData } from "@/components/register-form/schema";
import { LoginData } from "@/components/login-form/schema";
import { useAppSelector } from "@/store/store";
import { getAuthStatus } from "@/store/reducers/auth/selectors";
import { AuthStatus } from "@/store/reducers/auth/types";
import { authService } from "@/services/authService";
import { setCookie } from "nookies";

export const useAuth = () => {
	const [uploadProgress, setUploadProgress] = useState<number>(0);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const authStatus = useAppSelector(getAuthStatus);
	//TODO Переделать под сервис

	const { login, logout } = useActions();

	const next = useCallback((snapshot: UploadTaskSnapshot) => {
		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		setUploadProgress(progress);
	}, []);

	const setDataToDb = useCallback(
		async (user: User, formData: RegisterData, photoURL: string | null) => {
			const userData: IUser = {
				uid: user.uid,
				displayName: formData.name,
				email: formData.email,
				favorites: [],
				photoURL,
			};

			await setDoc(doc(db, USERS_COLLECTION_PATH, user.uid), userData);

			await updateProfile(user, { photoURL });
			login(userData);
		},
		[]
	);

	const registerHandler = useCallback(async (data: RegisterData) => {
		setIsSubmitting(true);
		const { email, name: displayName, avatar, password } = data;

		try {
			const image = avatar?.[0];
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			await updateProfile(user, { displayName, photoURL: null });

			if (image) {
				const storageRef = ref(storage, displayName);
				const uploadTask = uploadBytesResumable(storageRef, image);

				await uploadTask.on(
					"state_changed",
					next,
					(error) => errorHandler(error),
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							setDataToDb(user, data, downloadURL);
							setIsSubmitting(false);
							setUploadProgress(0);
						});
					}
				);
			} else {
				setDataToDb(user, data, null);
				setIsSubmitting(false);
			}
		} catch (error) {
			if (isFirebaseError(error)) {
				errorHandler(error);
			}
			setIsSubmitting(false);
			setUploadProgress(0);
		}
	}, []);

	const loginHandler = useCallback(async ({ email, password }: LoginData) => {
		try {
			setIsSubmitting(true);

			const { user } = await signInWithEmailAndPassword(auth, email, password);
			const userData = await authService.getUser(user.uid);

			setCookie(null, COOKIE_USER_ID_KEY, user.uid, {
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});

			if (userData) {
				login(userData);
			} else {
				throw new Error("Такого пользователя не существует");
			}

			setIsSubmitting(false);
		} catch (error) {
			if (isFirebaseError(error)) {
				errorHandler(error);
			}

			setIsSubmitting(false);
		}
	}, []);

	const logoutHandler = useCallback(() => {
		try {
			signOut(auth);
			logout();
		} catch (error) {
			errorHandler(error);
		}
	}, []);

	const checkAuth = useCallback(() => {
		if (authStatus !== AuthStatus.UNKNOWN) {
			return;
		}

		//TODO Доделать авторизацию
		// authService.check()

		const unsub = onAuthStateChanged(auth, async (user) => {
			if (!user) {
				logout();
				return;
			}

			const userData = await authService.getUser(user.uid);

			if (userData) {
				login(userData);
			} else {
				logout();
			}
		});

		return () => {
			unsub();
		};
	}, []);

	return {
		checkAuth,
		registerHandler,
		loginHandler,
		uploadProgress,
		isSubmitting,
		logoutHandler,
	};
};
