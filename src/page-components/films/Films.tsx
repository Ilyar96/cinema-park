import React from 'react';
import { FilmList } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Container, Pagination } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";


export const FilmsPage = () => {
	const filters = useAppSelector(getFilters);
	const { data, isFetching } = useGetFilmsQuery(filters);

	return (
		<>
			<Container>
				<FilmList films={data?.docs} />
				{data && <Pagination data={data} />}
			</Container>
		</>
	);
};
