import { IUser } from "@/@types/user";

export enum AuthStatus {
	"UNKNOWN" = "unknown",
	"AUTH" = "auth",
	"NO_AUTH" = "no_auth",
}

export interface AuthState {
	status: AuthStatus;
	user: IUser | null;
}
