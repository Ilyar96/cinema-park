import { IUser } from "@/@types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
		}
	},
});

export const { login } = authSlice.actions;
export const authReducer = authSlice.reducer;