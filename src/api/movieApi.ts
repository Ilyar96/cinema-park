import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "@/@types/movie";
import { MovieResponse } from "@/@types/movieResponse";

const baseQueryOptions = {
	baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		"X-API-KEY": process.env.NEXT_PUBLIC_KEY || "",
	},
};

export const movieApi = createApi({
	reducerPath: "movieApi",
	baseQuery: fetchBaseQuery(baseQueryOptions),
	endpoints: (builder) => ({
		getMovies: builder.query<MovieResponse, void>({
			query: () => `movie`,
		}),
	}),
});

export const { useGetMoviesQuery } = movieApi;

export const { getMovies } = movieApi.endpoints;
