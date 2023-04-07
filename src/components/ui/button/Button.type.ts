export interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	appearance?: "primary" | "outlined" | "secondary";
	align?: "start" | "center" | "end";
	fullWidth?: boolean;
}
