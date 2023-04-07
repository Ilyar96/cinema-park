const requiredMessage = "Заполните обязательное поле";

export const errorMessages = {
	required: requiredMessage,
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
	},
};
