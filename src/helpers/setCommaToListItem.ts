import { ReactNode } from "react";

export const setCommaToListItem = (index: number) =>
	`${index !== 0 ? ", " : ""}`;
