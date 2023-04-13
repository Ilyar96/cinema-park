import { Film } from "@/@types/film";

export interface FilmCardProps {
	movie: Film;
	className?: string;
	as?: "li" | "div";
}
