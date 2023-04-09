import React, { useEffect } from 'react';
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, P } from '../ui';
import { AppRoutes } from "@/constants/routes";
import { errorMessages } from "@/constants";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
	const schema = yup.object({
		email: yup.string().email(errorMessages.email).required(errorMessages.required),
		password: yup.string().required(errorMessages.required)
	}).required();
	type FormData = yup.InferType<typeof schema>;

	const { register, handleSubmit, setFocus, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: FormData) => console.log(data);

	useEffect(() => {
		setFocus("name");
	}, []);

	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			<Input
				placeholder="Email"
				errorMessage={errors.email && errors.email.message}
				{...register("email")}
			/>
			<Input
				placeholder="Пароль"
				errorMessage={errors.password && errors.password.message}
				{...register("password")}
			/>

			<Button fullWidth type="submit">Войти</Button>

			<P>
				Еще нет учетной записи?{" "}
				<Link href={AppRoutes.REGISTER}>Регистрация</Link>
			</P>
		</form>
	);
};
