import {
	Action,
	configureStore,
	PreloadedState,
	ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { authReducer as auth } from "./reducers/auth/authSlice";

let store: AppStore;

export const initStore = (preloadedState = {}) => {
	return configureStore({
		reducer: { auth },
		preloadedState,
	});
};

export const initializeStore = (preloadedState: PreloadedState<RootState>) => {
	let _store = store ?? initStore(preloadedState);

	if (preloadedState && store) {
		_store = initStore({ ...store.getState(), ...preloadedState });
	}

	if (typeof window === "undefined") return _store;
	if (!store) store = _store;

	return _store;
};

export function useStore(initialState: RootState) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}

export type AppStore = ReturnType<typeof initStore>;
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

export const wrapper = createWrapper<AppStore>(initStore, { debug: true });
