import React, { useEffect } from 'react';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, P } from '../ui';
import { AppRoutes } from "@/components/constants/routes";
import { LoginData, schema } from "./schema";
import styles from "./LoginForm.module.scss";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

export const LoginForm = () => {
	const { query } = useRouter();
	const { register, handleSubmit, setFocus, formState: { errors } } = useForm<LoginData>({
		resolver: yupResolver(schema)
	});

	const { loginHandler, isSubmitting } = useAuth();

	const onSubmit = (data: LoginData) => loginHandler(data);

	useEffect(() => {
		setFocus("email");
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

			<Button fullWidth type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Авторизация..." : "Войти"}
			</Button>

			<P>
				Еще нет учетной записи?{" "}
				<Link href={{
					pathname: AppRoutes.REGISTER,
					query
				}}>
					Регистрация
				</Link>
			</P>
		</form>
	);
};
