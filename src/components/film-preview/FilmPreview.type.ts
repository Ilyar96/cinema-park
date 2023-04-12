import { Film } from "../../@types/film";
export interface FilmPreviewProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	film: Film;
}
