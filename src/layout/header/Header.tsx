import React from 'react';
import { Logo } from '../../components/logo/Logo';
import Link from "next/link";
import { AppRoutes } from "@/constants/routes";
import { useAuth } from "@/hooks";
import { Button } from "@/components/ui";

export const Header = () => {
	const { logoutHandler } = useAuth();

	return (
		<header>
			<Logo />

			<nav>
				<ul>
					<li><Link href={AppRoutes.HOME}>Главная</Link></li>
					<li><Link href={AppRoutes.LOGIN}>Войти</Link></li>
					<li><Link href={AppRoutes.REGISTER}>Регистрация</Link></li>
					<li><Button onClick={logoutHandler}>Выйти</Button></li>
				</ul>
			</nav>
		</header>
	);
};
