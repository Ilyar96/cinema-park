import { db } from "@/api/firebase";
import { USERS_COLLECTION_PATH } from "@/constants";
import { errorHandler } from "@/helpers";
import {
	arrayRemove,
	arrayUnion,
	doc,
	getDoc,
	updateDoc,
} from "firebase/firestore";

export const FavoriteFilmsService = {
	async add(userId: string, filmId: number) {
		try {
			const userRef = doc(db, USERS_COLLECTION_PATH, userId);

			const res = await getDoc(userRef);

			await updateDoc(userRef, {
				favorites: arrayUnion(filmId),
			});
		} catch (error) {
			errorHandler(error);
		}
	},
	async remove(userId: string, filmId: number) {
		try {
			const userRef = doc(db, USERS_COLLECTION_PATH, userId);
			const res = await getDoc(userRef);

			await updateDoc(userRef, {
				favorites: arrayRemove(filmId),
			});
		} catch (error) {
			errorHandler(error);
		}
	},
};
