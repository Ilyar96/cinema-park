import React from 'react';
import { withLayout } from "@/hok";
import { FavoriteFilms } from "@/page-components";

const Favorites = () => {
	return (
		<FavoriteFilms />
	);
};

export default withLayout(Favorites);