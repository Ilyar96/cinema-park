import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { IUser } from "@/@types/user";
import { AuthState, AuthStatus } from "./types";

const initialState: AuthState = {
	status: AuthStatus.UNKNOWN,
	user: null
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<IUser>) => {
			state.status = AuthStatus.AUTH;
			state.user = action.payload;
		},
		logout: (state) => {
			state.status = AuthStatus.NO_AUTH;
			state.user = null;
		},
		addFavoriteFilm: (state, action: PayloadAction<number>) => {
			if (state.user) {
				state.user.favorites.push(action.payload);
			}
		},
		removeFavoriteFilm: (state, action: PayloadAction<number>) => {
			if (state.user) {
				state.user.favorites =
					state.user.favorites.filter((id) => id !== action.payload);
			}
		}
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => ({
			...state,
			...action.payload[authSlice.name],
		}));
	},
});

export const { login, logout, addFavoriteFilm, removeFavoriteFilm } = authSlice.actions;
export const authReducer = authSlice.reducer;