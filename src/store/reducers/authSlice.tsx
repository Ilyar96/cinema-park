import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: "UNKNOWN",
	user: {}
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.status = "AUTH";
		}
	},
});

export const { login } = authSlice.actions;
export const authReducer = authSlice.reducer;