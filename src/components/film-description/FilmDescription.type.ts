import { Film } from "../../@types/film";

export interface FilmDescriptionProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	film: Film;
}
