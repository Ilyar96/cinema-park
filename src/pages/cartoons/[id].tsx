import React from 'react';

import { FilmPage } from '../../page-components/film/Film';
import { withLayout } from "@/hok";
import { wrapper } from "@/store/store";
import { getFilmById } from "@/api/filmApi";
import { authService } from "@/services/authService";
import { isString } from "@/@types";

const SingleCartoon = () => {
	return (
		<FilmPage />
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	const id = ctx.query?.id;

	await authService.serverSideAuthCheck(store, ctx);

	if (id && isString(id)) {
		await store.dispatch(getFilmById.initiate(id));
	}

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(SingleCartoon);