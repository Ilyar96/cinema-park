import React, { FC } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";

import { Breadcrumbs, ErrorBlock, FilmsSlider } from '@/components';
import { useGetFilmsByIdListQuery, useGetPersonByFilmIdQuery } from "@/api/filmApi";
import { InfoWrapper, PersonDescription } from "@/components";
import { Htag, Spinner } from "@/components/ui";

import styles from "./Person.module.scss";
import Head from "next/head";
import { setTitle } from "@/helpers";
import { SITE_NAME } from "@/components/constants";
import { getMostRateFilmList } from "@/helpers/getMostRateFilmList";

export const PersonPage: FC = () => {
	const { query } = useRouter();
	const id = query?.id ? String(query.id) : "";
	const { data, isFetching, isLoading, isError } = useGetPersonByFilmIdQuery(id);
	const filmIdList = data?.movies?.map((item) => (item.id));
	const { data: films } = useGetFilmsByIdListQuery(filmIdList);
	const enName = data?.enName ? data.enName : "";
	const name = data?.name ? data.name : enName;
	const filmList = data?.movies ? [...data.movies] : [];

	const mostRatedFilmNames = getMostRateFilmList(filmList).map((film) => `«${film.name}»`).join(", ");
	const description = `Лучшие работы: ${mostRatedFilmNames}. Смотрите фильмы и сериалы на ${SITE_NAME}.`;

	if (isFetching || isLoading) {
		return <>
			<Breadcrumbs entities={[]} />
			<Spinner />
		</>;
	}

	if (isError) {
		return <ErrorBlock>
			<Htag tag="h1" center>Ошибка загрузки данных. Попробуйте перезагрузить страницу.</Htag>
		</ErrorBlock>;
	}

	if (!data) {
		return null;
	}

	return (
		<>
			<Head>
				<title>
					{setTitle(name ? name : enName)}
				</title>
				<meta property="og:title" content={name ? name : enName} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={data?.photo} />
			</Head>

			<Breadcrumbs entities={[{ title: name }]} />
			<InfoWrapper>
				<div className={styles.posterWrapper}>
					<Image
						className={styles.poster}
						src={data?.photo}
						alt={name}
						width={277}
						height={439}
						priority={true}
					/>
				</div>
				<PersonDescription person={data} />
			</InfoWrapper>
			{films && <FilmsSlider films={films.docs.slice(0, 20)} title="Популярные фильмы" />}
		</>
	);
};
