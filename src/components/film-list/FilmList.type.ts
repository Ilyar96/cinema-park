import { Film } from "@/@types/film";

export interface FilmListProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	films: Film[] | undefined;
	isError?: boolean;
	isFetching?: boolean;
	isLoading?: boolean;
}
