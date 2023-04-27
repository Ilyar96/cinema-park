import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSlice } from "./reducers/auth/authSlice";
import { filterSlice } from "./reducers/filter/filterSlice";
import { filmApi } from "@/api/filmApi";

const rootReducer = {
	[authSlice.name]: authSlice.reducer,
	[filterSlice.name]: filterSlice.reducer,
	[filmApi.reducerPath]: filmApi.reducer,
};

export const makeStore = (preloadedState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(filmApi.middleware),
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppStore,
	unknown,
	Action
>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
