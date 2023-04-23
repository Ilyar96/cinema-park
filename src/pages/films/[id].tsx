import React from 'react';
import { GetServerSideProps } from "next";
import { FilmPage } from '../../page-components/film/Film';
import { withLayout } from "@/hok";
import { makeStore, wrapper } from "@/store/store";
import { getFilmsById } from "@/api/filmApi";
import { authService } from "@/services/authService";
import { isString } from "@/@types";

const Film = () => {
	return (
		<FilmPage />
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	await authService.serverSideAuthCheck(store, ctx);
	const id = ctx.query?.id;

	if (id && isString(id)) {
		await store.dispatch(getFilmsById.initiate(id));
	}

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Film);