import React from 'react';
import { Input, Button, P } from '../ui';
import styles from "./RegisterForm.module.scss";
import Link from "next/link";
import { AppRoutes } from "@/constants/routes";

export const RegisterForm = () => {
	return (
		<form className={styles.root}>
			<Input
				name="name"
				placeholder="Имя"
				errorMessage="Ошибка такая то такая то"
			/>
			<Input
				name="email"
				placeholder="Email"
			/>
			<Input
				name="password"
				placeholder="Пароль"
			/>

			<Button fullWidth type="submit">Зарегистрироваться</Button>

			<P>
				Уже зарегистрированы?{" "}
				<Link href={AppRoutes.LOGIN}>Войти</Link>
			</P>
		</form>
	);
};
