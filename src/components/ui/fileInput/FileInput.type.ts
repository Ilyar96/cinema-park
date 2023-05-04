import { KeyboardEvent } from "react";

export interface FileInputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	errorMessage?: string | undefined;
	isDraggable?: boolean;
	onLabelKeyDown?: (e: KeyboardEvent) => void;
	onFileChange?: (file: File) => void;
}
