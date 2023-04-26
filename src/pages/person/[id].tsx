import React from 'react';

import { withLayout } from "@/hok";
import { wrapper } from "@/store/store";
import { getFilmById, getFilmsByIdList, getImagesByFilmId, getPersonByFilmId } from "@/api/filmApi";
import { authService } from "@/services/authService";
import { isString } from "@/@types";
import { PersonPage } from "@/page-components/person/Person";

const Person = () => {
	return (
		<PersonPage />
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	const id = ctx.query?.id;
	await authService.serverSideAuthCheck(store, ctx);

	if (id && isString(id)) {
		const { data } = await store.dispatch(getPersonByFilmId.initiate(id));

		const filmIdList = data?.movies.map(({ id }) => (id));
		await store.dispatch(getFilmsByIdList.initiate(filmIdList));
	}

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Person);