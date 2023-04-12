import React from 'react';
import { useRouter } from "next/router";
import { useGetFilmsByIdQuery } from "@/api/filmApi";
import { FilmInfo, KinoBDPlayer } from '../../components';

export const FilmPage = () => {
	const { query, push } = useRouter();
	const { data: film, isError } = useGetFilmsByIdQuery(String(query.id));

	//TODO error
	if (isError || !film) {
		return <h1>Ошибка</h1>;
	}

	return (
		<div>
			<FilmInfo film={film} />
			<KinoBDPlayer id={String(query.id)} />
		</div>
	);
};
