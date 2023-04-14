import { Film } from "./film";
export type Genres =
	| "movie"
	| "tv-series"
	| "cartoon"
	| "anime"
	| "animated-series"
	| "tv-show";

export type SortField = keyof Film;

export interface Filter {
	"names.name"?: string;
	type?: Genres | "";
	year?: string;
	"genres.name"?: string;
	"countries.name"?: string;
	"persons.name"?: string;
	sortField?: SortField | "";
	sortType?: 1 | -1;
	page?: number;
	limit?: number;
}

export type Query = Filter;
