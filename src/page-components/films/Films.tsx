import React, { FC, useEffect } from 'react';
import { useRouter } from "next/router";

import { Breadcrumbs, FilmList, Filters } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Container, Pagination } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";
import { FilmsPageProps } from "./Films.type";
import { useActions } from "@/hooks";

import styles from "./Films.module.scss";

export const FilmsPage: FC<FilmsPageProps> = ({ breadcrumbLinks }) => {
	const { query, pathname } = useRouter();
	const { changeFilter } = useActions();
	const filters = useAppSelector(getFilters);
	const { data, isFetching, isError } = useGetFilmsQuery(filters);

	useEffect(() => {
		changeFilter(query);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<>
			{breadcrumbLinks && <Breadcrumbs entities={breadcrumbLinks} />}

			<Container className={styles.wrapper}>
				<Filters />
				{data && <FilmList className={styles.films} isError={isError} isFetching={isFetching} films={data?.docs} />}
				{data && <Pagination data={data} />}
			</Container>
		</>
	);
};
