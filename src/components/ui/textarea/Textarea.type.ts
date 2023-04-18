import { FieldError } from "react-hook-form";

export interface TextareaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	errorMessage?: string | undefined;
}
