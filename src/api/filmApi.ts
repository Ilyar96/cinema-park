import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Film } from "@/@types/film";
import { FilmResponse } from "@/@types/filmResponse";
import { ApiRoute } from "@/constants";
import { FilterState } from "@/store/reducers/filter/types";
import { convertIdsToSearchParams, setUrlParams } from "@/helpers";
import { HYDRATE } from "next-redux-wrapper";

const baseQueryOptions = {
	baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		"X-API-KEY": process.env.NEXT_PUBLIC_KEY || "",
	},
};

export const movieApi = createApi({
	reducerPath: "filmApi",
	baseQuery: fetchBaseQuery(baseQueryOptions),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getFilms: builder.query<FilmResponse, FilterState | void>({
			query: (filters) =>
				`${ApiRoute.MOVIE}${setUrlParams(filters as Record<string, string>)}`,
		}),
		getFilmsById: builder.query<Film, number | string>({
			query: (id) => `${ApiRoute.MOVIE}/${id}`,
		}),
		getFilmsByIdList: builder.query<FilmResponse, number[] | undefined>({
			query: (idList) =>
				`${ApiRoute.MOVIE}?${convertIdsToSearchParams(idList)}`,
		}),
	}),
});

export const {
	useGetFilmsQuery,
	useGetFilmsByIdQuery,
	useGetFilmsByIdListQuery,
} = movieApi;

export const { getFilms, getFilmsById } = movieApi.endpoints;
