import React from 'react';
import { FilmList } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Container } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";

export const HomePage = () => {
	const filters = useAppSelector(getFilters);
	const { data } = useGetFilmsQuery(filters);

	return (
		<>
			<Container>
				<FilmList films={data?.docs} />
			</Container>
		</>
	);
};
