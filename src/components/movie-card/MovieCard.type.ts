import { Movie } from "@/@types/movie";

export interface MovieItemProps {
	movie: Movie;
	className?: string;
	as?: "li" | "div";
}
