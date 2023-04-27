import React, { FC, Fragment } from 'react';
import { PersonDescriptionProps } from './PersonDescription.type';
import { Htag } from "../ui";
import styles from "./PersonDescription.module.scss";
import { FilmDetailItem } from "../";
import { declinationOfNum, setCommaToListItem } from "@/helpers";
import { dateOptions } from "@/components/constants";

export const PersonDescription: FC<PersonDescriptionProps> = ({ person, className }) => {
	const { name, enName, profession, age, birthday, growth, birthPlace, movies } = person;
	const birthdayDate = new Date(birthday).toLocaleDateString("ru", dateOptions);

	const careerLayout = <FilmDetailItem title="Карьера" >
		{profession.map(
			(profession, i) => (
				<Fragment key={profession.value}>
					{setCommaToListItem(i)}
					<span>{profession.value}</span>
				</Fragment>
			)
		)}
	</FilmDetailItem>;

	const birthPlaceLayout = <FilmDetailItem title="Место рождения" >
		{birthPlace.map(
			(place, i) => (
				<Fragment key={place.value}>
					{setCommaToListItem(i)}
					<span>{place.value}</span>
				</Fragment>
			)
		)}
	</FilmDetailItem>;

	return (
		<div className={className}>
			<Htag className={styles.title} tag="h1">{name ? name : enName}</Htag>
			{name && enName && <Htag className={styles.subtitle} tag="h2">
				{enName}
			</Htag>}

			<div className={styles.details}>
				{careerLayout}
				{growth && <FilmDetailItem title="Рост" >{growth / 100} м</FilmDetailItem>}
				<FilmDetailItem title="Дата рождения" >{birthdayDate} (<span>{age} {declinationOfNum(age, ['год', 'года', 'лет'])})</span></FilmDetailItem>
				{birthPlace && birthPlaceLayout}
				<FilmDetailItem title="Всего фильмов" >{movies.length}</FilmDetailItem>
			</div>
		</div>
	);
};
