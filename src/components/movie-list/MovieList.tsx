import React, { FC } from 'react';
import { MovieListProps } from "./MovieList.type";
import { movieExample } from "@/mocks";
import styles from "./MovieList.module.scss";
import { MovieCard } from '../movie-card/MovieCard';

const movies = [movieExample];

export const MovieList: FC<MovieListProps> = () => {
	return (
		<ul>
			{movies.map((movie) => (
				<MovieCard movie={movie} key={movie.id} />
			))}
		</ul>
	);
};
