import React, { FC } from 'react';
import cn from "classnames";
import { FilmListProps } from "./FilmList.type";
import { FilmCard } from '../film-card/FilmCard';
import { ErrorBlock } from "../";
import { Htag } from "../ui";
import styles from "./FilmList.module.scss";


export const FilmList: FC<FilmListProps> = ({ films, isError, isLoading, isFetching, className, ...props }) => {
	if (isFetching || isLoading) {
		return <ErrorBlock>
			<Htag tag="h1" center>Загрузка...</Htag>
		</ErrorBlock>;
	};

	if (isError) {
		return <ErrorBlock>
			<Htag tag="h1" center>Ошибка загрузки фильмов. Попробуйте перезагрузить страницу.</Htag>
		</ErrorBlock>;
	}

	if (films?.length === 0) {
		return <ErrorBlock>
			<Htag tag="h1" center>Не удалось найти фильмы по заданным параметрам</Htag>
		</ErrorBlock>;
	}

	return (
		<ul className={cn(styles.moviesList, className)} {...props}>
			{films && films.map((movie) => (
				<FilmCard film={movie} key={movie.id} />
			))}
		</ul>
	);
};
