import { Film } from "@/@types/film";

export interface FilmInfoProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	film: Film;
}
