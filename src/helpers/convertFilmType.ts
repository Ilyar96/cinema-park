export const convertFilmType = (type: string | undefined) => {
	switch (type) {
		case "tv-series":
			return "Сериал";
		case "animated-series":
			return "Мультсериал";
		case "anime":
			return "Аниме";
		case "carton":
			return "Мультфильм";
		default:
			return "Фильм";
	}
};
