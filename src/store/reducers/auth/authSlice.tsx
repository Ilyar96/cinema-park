import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/@types/user";
import { AuthState, AuthStatus } from "./types";

const initialState: AuthState = {
	status: AuthStatus.UNKNOWN,
	user: null
};

const authSlice = createSlice({
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
		}
	},
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;