import { v4 as uuidv4 } from "uuid";
import { db } from "@/api/firebase";
import { COMMENTS_COLLECTION_PATH } from "@/components/constants";
import {
	deleteField,
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { IUser } from "@/@types/user";
import { errorHandler } from "@/helpers";
import { IComment } from "@/@types/comment";

export const CommentService = {
	async add(filmId: string, text: string, sender: IUser | null) {
		if (!sender || !text || !filmId) {
			return;
		}

		const id = uuidv4();

		try {
			const commentRef = doc(db, COMMENTS_COLLECTION_PATH, filmId);
			const commentData = {
				text,
				sender,
				date: serverTimestamp(),
			};
			const res = await getDoc(commentRef);

			if (!res.exists()) {
				await setDoc(commentRef, {
					[id]: commentData,
				});
			} else {
				await updateDoc(commentRef, {
					[id]: commentData,
				});
			}
		} catch (error) {
			errorHandler(error);
		}
	},
	async update(filmId: string, text: string, comment: IComment) {
		if (!text || !filmId) {
			return;
		}

		try {
			const commentRef = doc(db, COMMENTS_COLLECTION_PATH, filmId);
			const commentData = {
				...comment,
				text,
			};

			await updateDoc(commentRef, {
				[comment.id]: commentData,
			});
		} catch (error) {
			errorHandler(error);
		}
	},

	async removeById(filmId: string, commentId: string) {
		try {
			const commentRef = doc(db, COMMENTS_COLLECTION_PATH, filmId);
			const res = await getDoc(commentRef);

			if (res.exists()) {
				await updateDoc(commentRef, {
					[commentId]: deleteField(),
				});
			}
		} catch (error) {
			errorHandler(error);
		}
	},
};
