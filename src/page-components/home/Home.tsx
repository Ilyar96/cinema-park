import React from 'react';
import { FilmList } from '../../components';
import { useGetFilmsQuery } from "@/api/filmApi";
import { Container } from "@/components/ui";

export const HomePage = () => {
	const { data } = useGetFilmsQuery();

	return (
		<>
			<Container>
				<FilmList films={data?.docs} />
			</Container>
		</>
	);
};
