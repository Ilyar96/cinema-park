import { Film } from "@/@types/film";

export interface FilmCardProps {
	film: Film;
	className?: string;
	as?: "li" | "div";
}
