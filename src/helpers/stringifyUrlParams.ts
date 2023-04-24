export const stringifyUrlParams = (params: Record<string, string>) => {
	const paramsList = Object.entries(params);

	return paramsList.reduce((res: string, [key, value], i) => {
		if (!value) {
			return res;
		}

		return res + `${res === "" ? "" : "&"}${key}=${value}`;
	}, "");
};
