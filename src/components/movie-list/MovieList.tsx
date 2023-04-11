import React, { FC } from 'react';
import { useGetMoviesQuery } from "@/api/movieApi";
import { MovieListProps } from "./MovieList.type";
import { MovieCard } from '../movie-card/MovieCard';
import { Container } from "../ui";
import styles from "./MovieList.module.scss";


export const MovieList: FC<MovieListProps> = () => {
	const { data } = useGetMoviesQuery();

	if (!data) {
		// TODO 
		return <h2>Ошибка загрузки</h2>;
	}

	return (
		<Container>
			<ul className={styles.moviesList}>
				{data.docs.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</ul>
		</Container>
	);
};
