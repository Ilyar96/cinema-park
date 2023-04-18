import { IComment } from "@/@types/comment";

export interface CommentFormProps {
	className?: string;
	btnLabel?: string;
	textareaPlaceholder?: string;
	initialValue?: string;
	comment?: IComment;
	callback?: Function;
}
