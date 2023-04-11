import React, { FC } from 'react';
import { MovieListProps } from "./MovieList.type";
import { movieExample } from "@/mocks";
import { MovieCard } from '../movie-card/MovieCard';
import { Container } from "../ui";
import styles from "./MovieList.module.scss";

const movies = [movieExample];

export const MovieList: FC<MovieListProps> = () => {
	return (
		<Container>
			<ul className={styles.moviesList}>
				{movies.map((movie) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</ul>
		</Container>
	);
};
