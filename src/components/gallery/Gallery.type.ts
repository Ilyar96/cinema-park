export interface GalleryProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> {
	filmId: string | number;
	title?: string;
}
