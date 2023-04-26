import { Movie } from "@/@types/person";

export const getMostRateFilmList = (filmList: Movie[], limit = 3) => {
	filmList.sort((a, b) => {
		if (!a.rating) {
			return 1;
		}
		if (!b.rating) {
			return -1;
		}
		return b.rating - a.rating;
	});

	const moviesShortList = filmList.reduce((res, film) => {
		if (
			res.length === limit ||
			res.find((movie: Movie) => movie.id === film.id)
		) {
			return res;
		}

		res.push(film);

		return res;
	}, [] as Movie[]);

	return moviesShortList;
};
