import React from 'react';
import { useRouter } from "next/router";
import { useGetFilmsByIdQuery } from "@/api/filmApi";
import { Breadcrumbs, Comments, ErrorBlock, FilmInfo, FilmList, KinoBDPlayer, SimilarFilms } from '../../components';
import Head from "next/head";
import { capitalize, convertFilmType } from "@/helpers";
import { Container, Htag } from "@/components/ui";
import { breadcrumbLinks } from "@/constants";
import { AppRoutes } from "@/constants/routes";
import { Film } from "@/@types/film";
import styles from "./Film.module.scss";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";


export const FilmPage = () => {
	const { query } = useRouter();
	const { data: film, isError, isFetching } = useGetFilmsByIdQuery(String(query.id));

	//TODO Доделать
	if (isFetching) {
		return <Htag tag="h1" center>Загрузка...</Htag>;
	}

	//TODO error
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
					{capitalize(title)} ({year}) смотреть онлайн бесплатно в хорошем HD 1080 / 720 качестве
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
