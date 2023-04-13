import React, { FC } from 'react';
import { useGetFilmsQuery } from "@/api/filmApi";
import { FilmListProps } from "./FilmList.type";
import { FilmCard } from '../film-card/MovieCard';
import { ErrorBlock } from "../";
import { Container, Htag } from "../ui";
import styles from "./FilmList.module.scss";


export const FilmList: FC<FilmListProps> = () => {
	const { data } = useGetFilmsQuery();

	if (!data) {
		return <ErrorBlock>
			<Htag tag="h1" center>Ошибка загрузки фильмов. Попробуйте перезагрузить страницу.</Htag>
		</ErrorBlock>;
	}

	return (
		<Container>
			<ul className={styles.moviesList}>
				{data.docs.map((movie) => (
					<FilmCard movie={movie} key={movie.id} />
				))}
			</ul>
		</Container>
	);
};
