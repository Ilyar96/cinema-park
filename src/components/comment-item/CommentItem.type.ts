import { IComment } from "@/@types/comment";

export interface CommentItemProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	comment: IComment;
}
