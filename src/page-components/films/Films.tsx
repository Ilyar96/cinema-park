import React, { FC } from 'react';
import { Breadcrumbs, FilmList, Filters } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Container, Pagination } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";
import { FilmsPageProps } from "./Films.type";
import styles from "./Films.module.scss";

export const FilmsPage: FC<FilmsPageProps> = ({ breadcrumbLinks }) => {
	const filters = useAppSelector(getFilters);
	const { data, isFetching, isError } = useGetFilmsQuery({ ...filters });

	return (
		<>
			{breadcrumbLinks && <Breadcrumbs entities={breadcrumbLinks} />}

			<Container className={styles.wrapper}>
				<Filters />
				<FilmList className={styles.films} isError={isError} isFetching={isFetching} films={data?.docs} />
				{data && <Pagination data={data} />}
			</Container>
		</>
	);
};
