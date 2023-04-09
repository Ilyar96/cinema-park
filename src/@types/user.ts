export interface IUser {
	uid: string;
	displayName: string;
	email: string;
	photoURL: string | null;
	favorites: [];
	messages: {};
	accessToken?: string;
}