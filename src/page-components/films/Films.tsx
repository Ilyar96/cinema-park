import React from 'react';
import { Breadcrumbs, FilmList, Filters } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Container, Pagination } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";
import styles from "./Films.module.scss";
import { AppRoutes } from "@/constants/routes";

const breadcrumbsLinks = [{ href: AppRoutes.FILMS, title: "Фильмы" }];

export const FilmsPage = () => {
	const filters = useAppSelector(getFilters);
	console.log("filters(Films): ", filters);
	const { data, isFetching, isError } = useGetFilmsQuery(filters);

	return (
		<>
			<Breadcrumbs entities={breadcrumbsLinks} />

			<Container>
				<Filters />
				<FilmList className={styles.films} isError={isError} isFetching={isFetching} films={data?.docs} />
				{data && <Pagination data={data} />}
			</Container>
		</>
	);
};
