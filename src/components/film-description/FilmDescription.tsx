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
import { Person } from "@/@types/film";
import Link from "next/link";
import { AppRoutes } from "@/components/constants/routes";
//TODO отступы между импортами

export const FilmDescription: FC<FilmDescriptionProps> = ({ film, className }) => {
	const user = useAppSelector(getUser);
	const favoriteFilms = useAppSelector(getFavoriteFilms);
	const { name, description, alternativeName, year, countries, genres, persons, ageRating } = film;
	const actorList = persons.filter((person) => person.enProfession === "actor").slice(0, 15);
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

	const countryListLayout = countries.length > 0 &&
		<FilmDetailItem title={declinationOfNum(countries.length, ["Страна", "Страны", "Страны"])}		>
			{countries.slice(0, 10).map(
				(country, i) => (<Fragment key={country.name}>
					{setCommaToListItem(i)}
					<span>{country.name}</span>
				</Fragment>)
			)}
		</FilmDetailItem>;

	const getPersonDetailLayout = (personList: Person[], titleList: [string, string, string]) => (
		<FilmDetailItem
			title={declinationOfNum(personList.length, titleList)}
		>
			{personList.map(
				(person, i) => (
					<Fragment key={person.id}>
						{setCommaToListItem(i)}
						<Link href={AppRoutes.PERSON + person.id}>{person.name ? person.name : person.enName}</Link>
					</Fragment>
				)
			)}
		</FilmDetailItem>
	);

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
				{getPersonDetailLayout(actorList, ["Актер", "Актера", "Актеры"])}
				{getPersonDetailLayout(directorList, ["Режисер", "Режисеры", "Режисеры"])}
				{genreDetailsLayout}
			</div>
		</div>
	);
};
