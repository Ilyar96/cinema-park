export const convertFilmType = (type: string, isPlural = false) => {
	switch (type) {
		case "tv-series":
			return isPlural ? "сериалы" : "сериал";
		case "animated-series":
			return isPlural ? "мультсериалы" : "мультсериал";
		case "anime":
			return "аниме";
		case "cartoon":
			return isPlural ? "мультфильмы" : "мультфильм";
		default:
			return isPlural ? "фильмы" : "фильм";
	}
};
