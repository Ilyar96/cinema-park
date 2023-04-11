import { IUser } from "@/@types/user";

export interface UserBtnProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	user: IUser;
}
