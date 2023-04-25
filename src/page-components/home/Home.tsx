import React, { FC } from 'react';

import { FilmList } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Button, Container } from "@/components/ui";
import { AppRoutes } from "@/constants/routes";
import { filmFilters, animeFilters, cartoonsFilters } from "@/constants";

import styles from "./Home.module.scss";

export const HomePage: FC = () => {
	const { data: filmsData } = useGetFilmsQuery(filmFilters);
	const { data: animeData } = useGetFilmsQuery(animeFilters);
	const { data: cartoonsData } = useGetFilmsQuery(cartoonsFilters);

	return (
		<Container>
			<Button className={styles.link} href={AppRoutes.FILMS}>Фильмы</Button>
			{filmsData && <FilmList className={styles.filmList} films={filmsData.docs} />}

			<Button className={styles.link} href={AppRoutes.CARTOONS}>Мультфильмы</Button>
			{cartoonsData && <FilmList className={styles.filmList} films={cartoonsData.docs} />}

			<Button className={styles.link} href={AppRoutes.ANIME}>Аниме</Button>
			{animeData && <FilmList className={styles.filmList} films={animeData.docs} />}
		</Container>
	);
};
