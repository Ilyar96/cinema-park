import Head from "next/head";

import { getFilms } from "@/api/filmApi";
import { withLayout } from "@/hok";
import { FilmsPage } from "@/page-components";
import { authService } from "@/services/authService";
import { changeFilter } from "@/store/actions";
import { wrapper } from "@/store/store";

const breadcrumbLinks = [{ title: "Мультфильмы" }];


const Cartoons = () => {
	return (
		<>
			<Head>
				<title>
					Мультфильмы смотреть онлайн, в хорошем HD 720 - 1080 качестве бесплатно
				</title>
				<meta name="description" content="Смотрите лучшие мультфильмы онлайн, в хорошем HD качестве совершенно бесплатно и без регистрации!" />
			</Head>
			<FilmsPage breadcrumbLinks={breadcrumbLinks} />
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	const query = ctx.query;
	await authService.serverSideAuthCheck(store, ctx);
	store.dispatch(changeFilter({ ...query, "genres.name": "мультфильм" }));
	await store.dispatch(getFilms.initiate(store.getState().filter));

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Cartoons);
