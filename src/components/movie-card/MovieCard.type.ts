import { Film } from "@/@types/film";

export interface MovieItemProps {
	movie: Film;
	className?: string;
	as?: "li" | "div";
}
