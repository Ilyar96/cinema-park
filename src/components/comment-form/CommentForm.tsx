import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import cn from "classnames";
import { Button, Textarea } from "../ui";
import { CommentFormProps } from "./CommentForm.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommentData, schema } from "./schema";
import styles from "./CommentForm.module.scss";
import { CommentService } from "@/services/commentService";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";

export const CommentForm: FC<CommentFormProps> = ({
	className,
	btnLabel = "Отправить",
	initialValue = "",
	textareaPlaceholder = "Введите комментарий",
	comment,
	callback
}) => {
	const { query } = useRouter();
	const user = useAppSelector(getUser);
	const { register, handleSubmit, formState: { errors }, reset } = useForm<CommentData>({
		resolver: yupResolver(schema)
	});

	const onSubmit = async (data: CommentData) => {
		if (typeof query.id === "string") {
			try {
				if (comment) {
					await CommentService.update(query.id, data.comment, comment);
					callback && callback();
				} else {
					await CommentService.add(query.id, data.comment, user);
				}
				reset();
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<form className={cn(className)} onSubmit={handleSubmit(onSubmit)}>
			<Textarea
				placeholder={textareaPlaceholder}
				errorMessage={errors.comment?.message}
				defaultValue={initialValue}
				{...register("comment")}
			/>

			<Button className={styles.btn} align="end">{btnLabel}</Button>
		</form>
	);
};
