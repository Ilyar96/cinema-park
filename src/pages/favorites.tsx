import React, { useEffect } from 'react';
import { useRouter } from "next/router";

import { withLayout } from "@/hok";
import { FavoriteFilms } from "@/page-components";
import { useAppSelector, wrapper } from "@/store/store";
import { getAuthStatus, getUser } from "@/store/reducers/auth/selectors";
import { AppRoutes } from "@/components/constants/routes";
import { AuthStatus } from "@/store/reducers/auth/types";
import { Spinner } from "@/components/ui";
import { authService } from "@/services/authService";
import { getFilmsByIdList } from "@/api/filmApi";

const Favorites = () => {
	const { pathname, push } = useRouter();
	const user = useAppSelector(getUser);
	const authStatus = useAppSelector(getAuthStatus);

	useEffect(() => {
		if (authStatus === AuthStatus.NO_AUTH) {
			push({
				pathname: AppRoutes.LOGIN,
				query: { returnUrl: pathname }
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authStatus]);

	if (!user) {
		return <Spinner />;
	}

	return (
		<FavoriteFilms />
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	await authService.serverSideAuthCheck(store, ctx);
	const user = store.getState().auth.user;

	if (user) {
		const favoriteList = user.favorites;
		await store.dispatch(getFilmsByIdList.initiate(favoriteList));
	}


	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Favorites);