import React, { FC, Fragment } from 'react';
import { FilmDescriptionProps } from './FilmDescription.type';
import { P, Htag, Button } from "../ui";
import { FilmDetailItem } from "../";
import { declinationOfNum, notifyWarning, setCommaToListItem } from "@/helpers";
import { useAppSelector } from "@/store/store";
import { getFavoriteFilms, getUser } from "@/store/reducers/auth/selectors";
import { useActions } from "@/hooks";
import { FavoriteFilmsService } from "@/services/favoriteFilmsService";
import HeartSolidSvg from "@/assets/images/heart-solid.svg";
import HeartOutlinedSvg from "@/assets/images/heart-regular.svg";
import styles from "./FilmDescription.module.scss";

export const FilmDescription: FC<FilmDescriptionProps> = ({ film, className }) => {
	const user = useAppSelector(getUser);
	const favoriteFilms = useAppSelector(getFavoriteFilms);
	const { name, description, alternativeName, year, countries, genres, persons, videos, ageRating } = film;
	const actorList = persons.filter((person) => person.enProfession === "actor");
	const directorList = persons.filter((person) => person.enProfession === "director");
	const isFavorite = favoriteFilms?.find((id) => id === film.id);
	const { addFavoriteFilm, removeFavoriteFilm } = useActions();

	const ToggleFavoriteFilmHandler = async () => {
		if (!user) {
			return notifyWarning("Для добавления в избранное необходимо авторизоваться");
		}

		if (isFavorite) {
			await FavoriteFilmsService.remove(user?.uid, film.id);
			removeFavoriteFilm(film.id);
		} else {
			await FavoriteFilmsService.add(user?.uid, film.id);
			addFavoriteFilm(film.id);
		}
	};

	// TODO Отрефакторить
	const countryListLayout = countries.length > 0 &&
		<FilmDetailItem title={declinationOfNum(countries.length, ["Страна", "Страны", "Страны"])}		>
			{countries.slice(0, 10).map(
				(country, i) => (<Fragment key={country.name}>
					{setCommaToListItem(i)}
					<span>{country.name}</span>
				</Fragment>)
			)}
		</FilmDetailItem>;

	const actorDetailsLayout = actorList.length > 0 &&
		<FilmDetailItem title="Актеры"		>
			{actorList.slice(0, 10).map(
				(actor, i) => (<Fragment key={actor.id}>
					{setCommaToListItem(i)}
					<span>{actor.name ? actor.name : actor.enName}</span>
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
					<span>{director.name ? director.name : director.enName}</span>
				</Fragment>)
			)}
		</FilmDetailItem>;

	const genreDetailsLayout = genres.length > 0 &&
		<FilmDetailItem
			title={declinationOfNum(genres.length, ["Жанр", "Жанры", "Жанры"])}
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
			<div className={styles.head}>
				<Htag className={styles.title} tag="h1">{name}</Htag>
				{alternativeName && <Htag className={styles.subtitle} tag="h2">
					{alternativeName}{" "}
					<span>({ageRating}+)</span>
				</Htag>}

				<Button
					className={styles.favoriteBtn}
					title={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
					onClick={ToggleFavoriteFilmHandler}
					withoutWrapper
				>
					{isFavorite ? <HeartSolidSvg /> : <HeartOutlinedSvg />}
				</Button>
			</div>
			<P>{description}</P>

			<div className={styles.details}>
				{year && <FilmDetailItem title="Год выхода" children={year} />}
				{countryListLayout}
				{actorDetailsLayout}
				{directorDetailsLayout}
				{genreDetailsLayout}
			</div>
		</div>
	);
};
