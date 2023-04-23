import { Film } from "@/@types/film";

export interface FilmCardProps {
	film: Film;
	className?: string;
	as?: "li" | "div";
}

export interface FilmCardSkeletonProps {
	className?: string;
	as?: "li" | "div";
}
