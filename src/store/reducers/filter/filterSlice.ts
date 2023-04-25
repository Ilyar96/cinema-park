import { HYDRATE } from "next-redux-wrapper";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterState } from "./types";
import { Query } from "@/@types/query";
import { YEAR_MIN_VALUE, YEAR_MAX_VALUE } from "@/constants";

const initialState: FilterState = {
	"names.name": "",
	type: "",
	year: `${YEAR_MIN_VALUE}-${YEAR_MAX_VALUE}`,
	"rating.kp": "0-10",
	"rating.imdb": "0-10",
	"genres.name": "",
	"countries.name": "",
	"persons.name": "",
	sortField: "",
	sortType: 1,
	page: 1,
	limit: 24,
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		changeFilter: (state, action: PayloadAction<Query>) => {
			return { ...state, ...action.payload };
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => ({
			...state,
			...action.payload[filterSlice.name],
		}));
	},
});

export const { changeFilter, changePage } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
