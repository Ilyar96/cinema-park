import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "@/api/firebase";
import { isFirebaseError } from "@/@types";
import { errorHandler } from "@/helpers";
import { USERS_COLLECTION_PATH } from "@/constants";
import {
	UploadTaskSnapshot,
	getDownloadURL,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import { useActions } from "./useActions";
import { IUser } from "@/@types/user";
import { RegisterData } from "@/components/register-form/schema";
import { AppRoutes } from "@/constants/routes";
import { LoginData } from "@/components/login-form/schema";

export const useAuth = () => {
	const [uploadProgress, setUploadProgress] = useState<number>(0);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { push } = useRouter();

	const { login } = useActions();

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
				messages: {},
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
							push(AppRoutes.HOME);
						});
					}
				);
			} else {
				setDataToDb(user, data, null);
				setIsSubmitting(false);
				push(AppRoutes.HOME);
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
			const res = await getDoc(doc(db, USERS_COLLECTION_PATH, user.uid));
			const userData = res.data();

			if (userData) {
				login(userData as IUser);
			} else {
				throw new Error("Такого пользователя не существует");
			}

			setIsSubmitting(false);
			push(AppRoutes.HOME);
		} catch (error) {
			console.log("error: ", error);
			if (isFirebaseError(error)) {
				errorHandler(error);
			}

			setIsSubmitting(false);
		}
	}, []);

	return { registerHandler, loginHandler, uploadProgress, isSubmitting };
};
