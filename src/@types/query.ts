import { Film } from "./film";
export type Genres =
	| "movie"
	| "tv-series"
	| "cartoon"
	| "anime"
	| "animated-series"
	| "tv-show";

export type SortField = keyof Film;

export enum SortType {
	"ASC" = 1,
	"DESC" = -1,
}

export interface Filter {
	"names.name"?: string;
	type?: Genres | "";
	year?: string;
	"rating.kp"?: string;
	"rating.imdb"?: string;
	"genres.name"?: string;
	"countries.name"?: string;
	"persons.name"?: string;
	sortField?: string;
	sortType?: SortType;
	page?: number;
	limit?: number;
}

export type Query = Filter;
