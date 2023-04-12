import React, { FC, Fragment } from 'react';
import { FilmDescriptionProps } from './FilmDescription.type';
import { P, Htag } from "../ui";
import { FilmDetailItem } from "../";
import styles from "./FilmDescription.module.scss";
import { declinationOfNum, setCommaToListItem } from "@/helpers";

export const FilmDescription: FC<FilmDescriptionProps> = ({ film, className }) => {
	const { name, description, alternativeName, year, countries, genres, persons, videos, ageRating } = film;
	const countryList = countries.map(({ name }) => name);
	const actorList = persons.filter((person) => person.enProfession === "actor");
	const directorList = persons.filter((person) => person.enProfession === "director");

	const actorDetailsLayout = actorList.length > 0 &&
		<FilmDetailItem title="Актеры"		>
			{actorList.slice(0, 10).map(
				(actor, i) => (<Fragment key={actor.id}>
					{setCommaToListItem(i)}
					<span>{actor.name}</span>
				</Fragment>)
			)}
		</FilmDetailItem>;

	const directorDetailsLayout = directorList.length > 0 &&
		<FilmDetailItem
			title={declinationOfNum(directorList.length, ["Режисер", "Режисеры", "Режисеры"])}
		>
			{directorList.map(
				(director, i) => (<Fragment key={director.id}>
					{setCommaToListItem(i)}
					<span>{director.name}</span>
				</Fragment>)
			)}
		</FilmDetailItem>;

	const genreDetailsLayout = genres.length > 0 &&
		<FilmDetailItem
			title={declinationOfNum(directorList.length, ["Жанр", "Жанры", "Жанры"])}
		>
			{genres.map(
				(genre, i) => (
					<Fragment key={genre.name}>{
						setCommaToListItem(i)}
						<span>{genre.name}</span>
					</Fragment>
				)
			)}
		</FilmDetailItem>;

	return (
		<div className={className}>
			<Htag className={styles.title} tag="h1">{name}</Htag>
			<Htag className={styles.subtitle} tag="h2">
				{alternativeName}{" "}
				<span>({ageRating}+)</span>
			</Htag>
			<P>{description}</P>

			<div className={styles.details}>
				{year && <FilmDetailItem title="Год выхода" children={year} />}
				{countryList &&
					<FilmDetailItem
						title={declinationOfNum(countryList.length, ["Страна", "Страны", "Страны"])}
						children={countryList}
					/>}
				{actorDetailsLayout}
				{directorDetailsLayout}
				{genreDetailsLayout}
			</div>
		</div>
	);
};
