import React from 'react';
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import YupPassword from 'yup-password';
import { Input, Button, P } from '../ui';
import { AppRoutes } from "@/constants/routes";
import { errorMessages } from "@/constants/errorMessages";
import styles from "./RegisterForm.module.scss";

YupPassword(yup);

export const RegisterForm = () => {

	const schema = yup.object({
		name: yup.string().required(errorMessages.required).min(errorMessages.name.length.value, errorMessages.name.length.message),
		email: yup.string().email(errorMessages.email).required(errorMessages.required),
		password: yup.string()
			.min(errorMessages.password.min.value, errorMessages.password.min.message)
			.minLowercase(errorMessages.password.minLowercase.value, errorMessages.password.minLowercase.message)
			.minUppercase(errorMessages.password.minUppercase.value, errorMessages.password.minUppercase.message)
			.minNumbers(errorMessages.password.minNumbers.value, errorMessages.password.minNumbers.message)
	}).required();
	type FormData = yup.InferType<typeof schema>;

	const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: FormData) => console.log(data);

	return (
		<form
			className={styles.root}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				placeholder="Имя"
				errorMessage={errors.name ? errors.name.message : ''}
				{...register("name")}
			/>
			<Input
				placeholder="Email"
				errorMessage={errors.email && errors.email.message}
				{...register("email")}
			/>
			<Input
				errorMessage={errors.password && errors.password.message}
				placeholder="Пароль"
				{...register("password")}
			/>

			<Button fullWidth type="submit">Зарегистрироваться</Button>

			<P>
				Уже зарегистрированы?{" "}
				<Link href={AppRoutes.LOGIN}>Войти</Link>
			</P>
		</form>
	);
};
