import { errorMessages } from "@/constants";
import * as yup from "yup";

export const schema = yup
	.object({
		email: yup
			.string()
			.email(errorMessages.email)
			.required(errorMessages.required),
		password: yup.string().required(errorMessages.required),
	})
	.required();

export type LoginData = yup.InferType<typeof schema>;
