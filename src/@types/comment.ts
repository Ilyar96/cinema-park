import { IUser } from "./user";

interface IDate {
	seconds: number;
	nanoseconds: number;
}

export interface IComment {
	id: string;
	text: string;
	sender: IUser;
	date: IDate;
}
