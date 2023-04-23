import { stringifyUrlParams } from "./stringifyUrlParams";

export const setUrlParams = (params: Record<string, string> | void): string => {
	if (!params) {
		return "";
	}

	return `?${stringifyUrlParams(params)}`;
};
