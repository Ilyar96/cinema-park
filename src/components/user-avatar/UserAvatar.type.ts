import { IUser } from "@/@types/user";

export interface UserAvatarProps {
	user: IUser;
	size?: "sm" | "md" | "lg";
	className?: string;
}
