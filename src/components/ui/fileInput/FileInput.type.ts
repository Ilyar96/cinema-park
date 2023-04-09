import { KeyboardEvent } from "react";

export interface FileInputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	errorMessage?: string | undefined;
	onLabelKeyDown?: (e: KeyboardEvent) => void;
}
