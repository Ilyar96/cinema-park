import { GetServerSidePropsContext, PreviewData } from "next";
import nookies from "nookies";

import { IUser } from "@/@types/user";
import { auth, db } from "@/api/firebase";
import { USERS_COLLECTION_PATH } from "@/constants";
import { errorHandler } from "@/helpers";
import { AppStore } from "@/store/store";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ParsedUrlQuery } from "querystring";
import { login } from "@/store/actions";

export const authService = {
	async getUser(uid: string) {
		try {
			const res = await getDoc(doc(db, USERS_COLLECTION_PATH, uid));
			return res.data() as IUser;
		} catch (error) {
			errorHandler(error);
		}
	},
	check() {
		let userData: IUser | undefined;

		const unsub = onAuthStateChanged(auth, async (user) => {
			if (user) {
				userData = await this.getUser(user.uid);
			}
		});

		return { user: userData, unsub };
	},
	async serverSideAuthCheck(
		store: AppStore,
		ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
	) {
		const { user_id: uid } = nookies.get(ctx);
		//TODO переделать при помощи Firebase Admin SDK

		if (uid) {
			const userData = await authService.getUser(uid);
			userData && store.dispatch(login(userData));
		}
	},
};
