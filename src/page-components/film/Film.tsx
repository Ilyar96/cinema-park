import React from 'react';
import { useRouter } from "next/router";
import { useGetFilmsByIdQuery } from "@/api/filmApi";
import { Breadcrumbs, ErrorBlock, FilmInfo, FilmList, KinoBDPlayer, SimilarFilms } from '../../components';
import Head from "next/head";
import { convertFilmType } from "@/helpers";
import { Container, Htag } from "@/components/ui";
import { AppRoutes } from "@/constants/routes";
import { Film } from "@/@types/film";
import styles from "./Film.module.scss";


export const FilmPage = () => {
	const { query } = useRouter();
	const { data: film, isError } = useGetFilmsByIdQuery(String(query.id));
	const breadcrumbsLinks = [{ href: AppRoutes.FILMS, title: "Фильмы" }];

	//TODO error
	if (isError || !film) {
		return <>
			<Breadcrumbs entities={breadcrumbsLinks} />
			<ErrorBlock>
				<Htag tag="h1" center>Ошибка загрузки фильма. Попробуйте перезагрузить страницу.</Htag>
			</ErrorBlock>
		</>;
	}

	const { name, year, description, poster, type, similarMovies } = film;
	const similarFilmList = (similarMovies as Array<Film>);
	const title = convertFilmType(type);

	return (
		<>
			<Head>
				<meta name="description" content={film.description} />
				<title>
					{title} ({year}) смотреть онлайн бесплатно в хорошем HD 1080 / 720 качестве
				</title>
				<meta property="og:title" content={`${name} (${year})`} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={poster?.url} />
			</Head>
			<Breadcrumbs entities={[...breadcrumbsLinks, { title: name }]} />
			<FilmInfo film={film} />
			<SimilarFilms films={similarFilmList} title="Похожие фильмы" />
			{/* <KinoBDPlayer film={film} /> */}
		</>
	);
};
