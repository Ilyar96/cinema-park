import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { Film } from "@/@types/film";
import { FilmResponse } from "@/@types/filmResponse";
import { ApiRoute, GALLERY_LENGTH } from "@/constants";
import { FilterState } from "@/store/reducers/filter/types";
import { stringifyIds, setUrlParams } from "@/helpers";
import { ImageResponse } from "@/@types/imageResponse";

const baseQueryOptions = {
	baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "",
	headers: {
		"X-API-KEY": process.env.NEXT_PUBLIC_KEY || "",
	},
};

export const filmApi = createApi({
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
		getFilmById: builder.query<Film, number | string>({
			query: (id) => `${ApiRoute.MOVIE}/${id}`,
		}),
		getFilmsByIdList: builder.query<FilmResponse, number[] | undefined>({
			query: (idList) => `${ApiRoute.MOVIE}?${stringifyIds(idList)}`,
		}),
		getImagesByFilmId: builder.query<ImageResponse, number | string>({
			query: (filmId) =>
				`${ApiRoute.IMAGE}?movieId=${filmId}&limit=${GALLERY_LENGTH}&type=frame`,
		}),
	}),
});

export const {
	useGetFilmsQuery,
	useGetFilmByIdQuery,
	useGetFilmsByIdListQuery,
	useGetImagesByFilmIdQuery,
} = filmApi;

export const { getFilms, getFilmById, getFilmsByIdList, getImagesByFilmId } =
	filmApi.endpoints;
