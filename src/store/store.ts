import { useMemo } from "react";
import {
	Action,
	configureStore,
	PreloadedState,
	ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authReducer as auth } from "./reducers/auth/authSlice";
import { filterReducer as filter } from "./reducers/filter/filterSlice";
import { movieApi } from "@/api/filmApi";

let store: AppStore;

const rootReducer = {
	auth,
	filter,
	[movieApi.reducerPath]: movieApi.reducer,
};

export const makeStore = (preloadedState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(movieApi.middleware),
	});
};

export const initializeStore = (preloadedState: PreloadedState<RootState>) => {
	let _store = store ?? makeStore(preloadedState);

	if (preloadedState && store) {
		_store = makeStore({ ...store.getState(), ...preloadedState });
	}

	if (typeof window === "undefined") return _store;
	if (!store) store = _store;

	return _store;
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

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
