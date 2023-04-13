import React from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import { FilmList } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Container } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";
import { useActions } from "@/hooks";

export const HomePage = () => {
	const filters = useAppSelector(getFilters);
	const { data, isFetching } = useGetFilmsQuery(filters);
	const { changePage } = useActions();

	return (
		<>
			<Container>
				<FilmList films={data?.docs} />
				{data && <ResponsivePagination
					current={data.page}
					total={data.pages}
					onPageChange={changePage}
				/>}
			</Container>
		</>
	);
};
