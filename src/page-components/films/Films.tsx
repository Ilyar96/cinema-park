import React from 'react';
import { FilmList, Filters } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Container, Pagination } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";
import styles from "./Films.module.scss";


export const FilmsPage = () => {
	const filters = useAppSelector(getFilters);
	const { data, isFetching } = useGetFilmsQuery({ ...filters, type: "movie" });

	return (
		<>
			<Container>
				<Filters />
				<FilmList className={styles.films} films={data?.docs} />
				{data && <Pagination data={data} />}
			</Container>
		</>
	);
};
