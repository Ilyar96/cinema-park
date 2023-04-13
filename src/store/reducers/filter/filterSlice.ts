import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterState } from "./types";
import { Query } from "@/@types/query";

const initialState: FilterState = {
	"names.name": "",
	type: "",
	year: "2021",
	"genres.name": "",
	"countries.name": "",
	"persons.id": "",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		changeFilter: (state, action: PayloadAction<Query>) => {
			state = { ...state, ...action.payload };
		},
	},
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
