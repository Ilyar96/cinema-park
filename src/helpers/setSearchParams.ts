import { FilterState } from "@/store/reducers/filter/types";

export const setSearchParams = (params: FilterState | void): string => {
	if (!params) {
		return "";
	}

	const paramsList = Object.entries(params);

	const paramsStr = paramsList.reduce((res: string, [key, value], i) => {
		if (!value) {
			return res;
		}

		return res + `${i !== 0 ? "&" : ""}${key}=${value}`;
	}, "");

	return `?${paramsStr}`;
};
