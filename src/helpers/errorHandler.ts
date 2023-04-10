import { isError, isFirebaseError } from "@/@types";
import { notifyError } from "./";

const LOGIN_ERROR_MESSAGE = "Неправильный логин или пароль";
const EXIST_EMAIL_ERROR_MESSAGE =
	"Пользователь с таким email уже зарегистрирован";
const DEFAULT_ERROR_MESSAGE = "Что-то пошло не так...";

export const errorHandler = (error: unknown) => {
	if (isFirebaseError(error)) {
		const errorCode = error.code;

		switch (errorCode) {
			case "auth/wrong-password":
				return notifyError(LOGIN_ERROR_MESSAGE);
			case "auth/user-not-found":
				return notifyError(LOGIN_ERROR_MESSAGE);
			case "auth/email-already-in-use":
				return notifyError(EXIST_EMAIL_ERROR_MESSAGE);
		}
	}

	if (isError(error)) {
		let msg = error.message;

		if (msg === "Failed to get document because the client is offline.") {
			msg = "Не удалось получить данные из-за проблем с сетью.";
		}

		return notifyError(msg);
	}

	return notifyError(DEFAULT_ERROR_MESSAGE);
};
