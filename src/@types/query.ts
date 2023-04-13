export type Genres =
	| "movie"
	| "tv-series"
	| "cartoon"
	| "anime"
	| "animated-series"
	| "tv-show";

export interface Filter {
	"names.name": string;
	type: Genres | "";
	year: string;
	"genres.name": string;
	"countries.name": string;
	"persons.id": string;
}

export type Query = Filter;
