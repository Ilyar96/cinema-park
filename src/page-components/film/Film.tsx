import React from 'react';
import { useRouter } from "next/router";
import { useGetFilmsByIdQuery } from "@/api/filmApi";
import { Breadcrumbs, Comments, ErrorBlock, FilmInfo, SimilarFilms } from '../../components';
import Head from "next/head";
import { capitalize, convertFilmType } from "@/helpers";
import { Htag, Spinner } from "@/components/ui";
import { breadcrumbLinks } from "@/constants";
import { Film } from "@/@types/film";


export const FilmPage = () => {
	const { query } = useRouter();
	const { data: film, isError, isFetching } = useGetFilmsByIdQuery(String(query.id));

	if (isFetching) {
		return <Spinner />;
	}

	if (isError || !film) {
		return <>
			<Breadcrumbs entities={[breadcrumbLinks.films]} />
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
			<Breadcrumbs entities={[breadcrumbLinks.films, { title: name ? name : alternativeName }]} />
			<FilmInfo film={film} />
			<Comments />
			{similarFilmList.length > 0 && <SimilarFilms films={similarFilmList} title={"Смотрите также"} />}
			{/* <KinoBDPlayer film={film} /> */}
		</>
	);
};
