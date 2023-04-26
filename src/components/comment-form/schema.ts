import { errorMessages } from "@/components/constants";
import * as yup from "yup";

export const schema = yup
	.object({
		comment: yup
			.string()
			.required(errorMessages.required)
			.min(
				errorMessages.comment.length.value,
				errorMessages.comment.length.message
			),
	})
	.required();

export type CommentData = yup.InferType<typeof schema>;
