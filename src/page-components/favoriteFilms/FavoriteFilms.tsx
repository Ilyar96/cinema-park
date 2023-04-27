import React, { FC } from 'react';
import { Breadcrumbs, FilmList } from '../../components';
import { useGetFilmsByIdListQuery } from "@/api/filmApi";
import { Container } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFavoriteFilms } from "@/store/reducers/auth/selectors";
import { setTitle } from "@/helpers";
import styles from "./FavoriteFilms.module.scss";
import Head from "next/head";

export const FavoriteFilms: FC = () => {
	const favoriteFilms = useAppSelector(getFavoriteFilms);
	const { data, isFetching, isError } = useGetFilmsByIdListQuery(favoriteFilms);

	return (
		<>
			<Head>
				<title>{setTitle("Избранное")}</title>
			</Head>
			<Breadcrumbs entities={[{ title: "Избранное" }]} />

			<Container className={styles.wrapper}>
				<FilmList className={styles.films} isError={isError} isFetching={isFetching} films={data?.docs} />
			</Container>
		</>
	);
};
