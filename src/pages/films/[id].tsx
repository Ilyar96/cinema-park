import React from 'react';
import { GetServerSideProps } from "next";
import { FilmPage } from '../../page-components/film/Film';
import { withLayout } from "@/hok";
import { makeStore } from "@/store/store";
import { getFilmsById } from "@/api/filmApi";

const Film = () => {
	return (
		<FilmPage />
	);
};

// export const getServerSideProps: GetServerSideProps =
// 	async ({ query }) => {
// 		const store = initStore();
// 		await store.dispatch(getFilmsById.initiate(String(query.id)));

// 		return { props: { initialReduxState: store.getState() } };
// 	};

export default withLayout(Film);