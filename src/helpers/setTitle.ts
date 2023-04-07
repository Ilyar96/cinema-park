import { siteName, titleSeparator } from "@/constants";

export const setTitle = (title: string) => {
	return `${title} ${titleSeparator} ${siteName}`;
};
