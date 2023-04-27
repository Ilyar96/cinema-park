export const stringifyUrlParams = (params: Record<string, string>) => {
	const paramsList = Object.entries(params);

	return paramsList.reduce((res: string, [key, value]) => {
		if (!value) {
			return res;
		}

		return res + `${res === "" ? "" : "&"}${key}=${value}`;
	}, "");
};
