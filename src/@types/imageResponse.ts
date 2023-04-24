export interface FilmImage {
	id: string;
	movieId: number;
	previewUrl: string;
	type: string;
	url: string;
}

export interface ImageResponse {
	docs: FilmImage[];
	limit: number;
	page: number;
	pages: number;
	total: number;
}
