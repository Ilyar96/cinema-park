import React, { FC } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";

import { useGetFilmByIdQuery } from "@/api/filmApi";
import { Breadcrumbs, Comments, ErrorBlock, FilmInfo, KinoBDPlayer, FilmsSlider } from '../../components';
import { capitalize, convertFilmType, getBreadcumbsItemByPathanme } from "@/helpers";
import { Htag, Spinner } from "@/components/ui";
import { Film } from "@/@types/film";


export const FilmPage: FC = () => {
	const { query, pathname } = useRouter();
	const { data: film, isError, isFetching } = useGetFilmByIdQuery(String(query.id));
	const breadcrumbsItem = getBreadcumbsItemByPathanme(pathname);

	if (isFetching) {
		return <Spinner />;
	}

	if (isError || !film) {
		return <>
			<Breadcrumbs entities={[]} />
			<ErrorBlock>
				<Htag tag="h1" center>Ошибка загрузки фильма. Попробуйте перезагрузить страницу.</Htag>
			</ErrorBlock>
		</>;
	}

	const { name, year, description, poster, type, similarMovies, alternativeName } = film;
	const similarFilmList = (similarMovies as Array<Film>);
	const title = convertFilmType(type);

	return (
		<>
			<Head>
				<meta name="description" content={film.description} />
				<title>
					{capitalize(title)} {name ? name : alternativeName} ({year}) смотреть онлайн бесплатно в хорошем HD 1080 / 720 качестве
				</title>
				<meta property="og:title" content={`${name} (${year})`} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={poster?.url} />
			</Head>
			<Breadcrumbs entities={[breadcrumbsItem, { title: name ? name : alternativeName }]} />
			<FilmInfo film={film} />
			<KinoBDPlayer film={film} />
			<Comments />
			{similarFilmList.length > 0 && <FilmsSlider films={similarFilmList} title={"Смотрите также:"} />}
		</>
	);
};
