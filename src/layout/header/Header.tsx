import React from 'react';
import { Logo } from '../../components/logo/Logo';
import Link from "next/link";
import { AppRoutes } from "@/constants/routes";

export const Header = () => {
	return (
		<header>
			<Logo />

			<nav>
				<ul>
					<li><Link href={AppRoutes.HOME}>Главная</Link></li>
					<li><Link href={AppRoutes.LOGIN}>Войти</Link></li>
					<li><Link href={AppRoutes.REGISTER}>Регистрация</Link></li>
				</ul>
			</nav>
		</header>
	);
};
