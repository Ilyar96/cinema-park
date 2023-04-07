import React from 'react';
import { Input, Button, P } from '../ui';
import styles from "./LoginForm.module.scss";
import Link from "next/link";
import { AppRoutes } from "@/constants/routes";

export const LoginForm = () => {
	return (
		<form className={styles.root}>
			<Input
				name="email"
				placeholder="Email"
			/>
			<Input
				name="password"
				placeholder="Пароль"
			/>

			<Button fullWidth type="submit">Войти</Button>

			<P>
				Еще нет учетной записи?{" "}
				<Link href={AppRoutes.REGISTER}>Регистрация</Link>
			</P>
		</form>
	);
};
