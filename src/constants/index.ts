import { formatBytes } from "../helpers/formatBytes";
// Meta
export const SITE_NAME = "Cinema Park";
export const TITLE_SEPARATOR = "|";

//Firebase
export const USERS_COLLECTION_PATH = "users";

//Register Form image
export const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const FILE_SIZE = 2100000;

// Error messages
const REQUIRED_MESSAGE = "Заполните обязательное поле";

export const errorMessages = {
	required: REQUIRED_MESSAGE,
	name: {
		length: { value: 2, message: "Минимальная длина пароля 2 символов" },
	},
	email: "Введите валидный email",
	password: {
		min: { value: 8, message: "Минимальная длина пароля 8 символов" },
		minLowercase: {
			value: 1,
			message: "Минимум один символ в нижнем регистре",
		},
		minUppercase: {
			value: 1,
			message: "Минимум один символ в верхнем регистре",
		},
		minNumbers: { value: 1, message: "Минимум одно число" },
		space: "Пробелы недопустимы",
	},
	avatar: {
		size: `Размер файла не должен превышать ${formatBytes(FILE_SIZE)}`,
		format: "Поддерживаемые форматы: jpg, jpeg, png",
	},
};

// Local Storage keys
export const PREVIOUS_PATHNAME_KEY = "previous-pathname";
