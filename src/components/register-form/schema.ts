import { errorMessages } from "@/constants";
import * as yup from "yup";
import YupPassword from "yup-password";
import { spaceValidate, sizeValidate, formatValidate } from "@/helpers";

YupPassword(yup);

export const registerSchema = yup
	.object({
		name: yup
			.string()
			.required(errorMessages.required)
			.min(errorMessages.name.length.value, errorMessages.name.length.message),
		email: yup
			.string()
			.email(errorMessages.email)
			.required(errorMessages.required),
		password: yup
			.string()
			.min(errorMessages.password.min.value, errorMessages.password.min.message)
			.minLowercase(
				errorMessages.password.minLowercase.value,
				errorMessages.password.minLowercase.message
			)
			.minUppercase(
				errorMessages.password.minUppercase.value,
				errorMessages.password.minUppercase.message
			)
			.minNumbers(
				errorMessages.password.minNumbers.value,
				errorMessages.password.minNumbers.message
			)
			.test("spaces", errorMessages.password.space, spaceValidate)
			.required(errorMessages.required),

		avatar: yup
			.mixed<FileList>()
			.test("fileSize", errorMessages.avatar.size, (files) =>
				sizeValidate(files)
			)
			.test("fileType", errorMessages.avatar.format, (files) =>
				formatValidate(files)
			),
	})
	.required();

export type RegisterData = yup.InferType<typeof registerSchema>;
