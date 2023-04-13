import React, { FC } from 'react';
import cn from "classnames";
import { FilmListProps } from "./FilmList.type";
import { FilmCard } from '../film-card/FilmCard';
import { ErrorBlock } from "../";
import { Htag } from "../ui";
import styles from "./FilmList.module.scss";


export const FilmList: FC<FilmListProps> = ({ films, className, ...props }) => {

	if (!films) {
		return <ErrorBlock>
			<Htag tag="h1" center>Ошибка загрузки фильмов. Попробуйте перезагрузить страницу.</Htag>
		</ErrorBlock>;
	}

	return (
		<ul className={cn(styles.moviesList, className)} {...props}>
			{films.map((movie) => (
				<FilmCard film={movie} key={movie.id} />
			))}
		</ul>
	);
};
