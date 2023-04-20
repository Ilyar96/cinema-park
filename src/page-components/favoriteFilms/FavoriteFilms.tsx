import React, { FC } from 'react';
import { Breadcrumbs, FilmList, Filters } from '../../components';
import { useGetFilmsByIdListQuery, useGetFilmsQuery } from "@/api/filmApi";
import { Container, Pagination } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";
import { getFavoriteFilms } from "@/store/reducers/auth/selectors";
import { AppRoutes } from "@/constants/routes";
import { convertIdsToSearchParams, setTitle } from "@/helpers";
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
