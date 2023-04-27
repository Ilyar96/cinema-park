import { db } from "@/api/firebase";
import { USERS_COLLECTION_PATH } from "@/components/constants";
import { errorHandler } from "@/helpers";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export const FavoriteFilmsService = {
	async add(userId: string, filmId: number) {
		try {
			const userRef = doc(db, USERS_COLLECTION_PATH, userId);

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

			await updateDoc(userRef, {
				favorites: arrayRemove(filmId),
			});
		} catch (error) {
			errorHandler(error);
		}
	},
};
