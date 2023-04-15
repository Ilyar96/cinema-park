import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterState } from "./types";
import { Query } from "@/@types/query";

const initialState: FilterState = {
	"names.name": "",
	type: "",
	year: `1900-${new Date().getFullYear()}`,
	"rating.kp": "0-10",
	"genres.name": "",
	"countries.name": "",
	"persons.name": "",
	sortField: "",
	sortType: 1,
	page: 1,
	limit: 24,
};

const filterSlice = createSlice({
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
});

export const { changeFilter, changePage } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
