export interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	appearance?: "primary" | "outlined" | "secondary" | "text" | "link";
	align?: "start" | "center" | "end";
	href?: string;
	returnUrl?: string;
	fullWidth?: boolean;
	withoutWrapper?: boolean;
}
