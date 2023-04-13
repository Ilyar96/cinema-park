import { Film, SimilarMovie } from "@/@types/film";

export interface FilmListProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	films: Film[] | undefined;
}
