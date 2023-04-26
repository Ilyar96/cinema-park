import { SITE_NAME, TITLE_SEPARATOR } from "@/components/constants";

export const setTitle = (title: string) => {
	return `${title} ${TITLE_SEPARATOR} ${SITE_NAME}`;
};
