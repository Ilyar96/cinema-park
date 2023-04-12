import { Person } from "@/@types/film";
import { ReactNode } from "react";

export interface FilmDetailItemProps {
	title: string;
	children: ReactNode;
	className?: string;
}
