import { RootState } from "@/store/store";

export const getAuthStatus = (state: RootState) => state.auth.status;
export const getUser = (state: RootState) => state.auth.user;
export const getFavoriteFilms = (state: RootState) =>
	state.auth.user?.favorites;
