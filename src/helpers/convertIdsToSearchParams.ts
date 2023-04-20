export const convertIdsToSearchParams = (
	idList: number[] | undefined
): string => {
	if (!idList) {
		return "";
	}
	return idList.reduce((str, id, index) => {
		if (index !== 0) {
			str += `&`;
		}
		str += `id=${id}`;
		return str;
	}, "");
};
