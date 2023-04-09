import { FirebaseError } from "firebase/app";

export const isFirebaseError = (value: unknown): value is FirebaseError =>
	value instanceof FirebaseError;
