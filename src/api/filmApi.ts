import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Film } from "@/@types/film";
import { FilmResponse } from "@/@types/filmResponse";
import { ApiRoute } from "@/constants";

const baseQueryOptions = {
	baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		"X-API-KEY": process.env.NEXT_PUBLIC_KEY || "",
	},
};

export const movieApi = createApi({
	reducerPath: "filmApi",
	baseQuery: fetchBaseQuery(baseQueryOptions),
	endpoints: (builder) => ({
		getFilms: builder.query<FilmResponse, void>({
			query: () => ApiRoute.MOVIE,
		}),
		getFilmsById: builder.query<Film, number | string>({
			query: (id) => `${ApiRoute.MOVIE}/${id}`,
		}),
	}),
});

export const { useGetFilmsQuery, useGetFilmsByIdQuery } = movieApi;

export const { getFilms, getFilmsById } = movieApi.endpoints;
