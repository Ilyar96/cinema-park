import { Genres } from "@/store/reducers/filter/types";

export const convertFilmType = (type: Genres) => {
	switch (type) {
		case "tv-series":
			return "Сериал";
		case "animated-series":
			return "Мультсериал";
		case "anime":
			return "Аниме";
		case "cartoon":
			return "Мультфильм";
		default:
			return "Фильм";
	}
};
