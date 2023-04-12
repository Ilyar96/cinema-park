import { Film } from "./film";

export interface FilmResponse {
	docs: Film[];
	limit: number;
	page: number;
	pages: number;
	total: number;
}
