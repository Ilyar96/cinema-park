import React from 'react';

import { FilmPage } from '../../page-components/film/Film';
import { withLayout } from "@/hok";
import { wrapper } from "@/store/store";
import { getFilmById, getImagesByFilmId } from "@/api/filmApi";
import { authService } from "@/services/authService";
import { isString } from "@/@types";

const Film = () => {
	return (
		<FilmPage />
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	const id = ctx.query?.id;

	await authService.serverSideAuthCheck(store, ctx);

	if (id && isString(id)) {
		await Promise.allSettled([
			store.dispatch(getFilmById.initiate(id)),
			// store.dispatch(getImagesByFilmId.initiate(id))
		]);
	}

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Film);