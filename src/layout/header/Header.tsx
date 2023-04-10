import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { Logo } from '../../components/logo/Logo';
import { AppRoutes } from "@/constants/routes";
import { useAuth } from "@/hooks";
import { Button } from "@/components/ui";
import { PREVIOUS_PATHNAME_KEY } from "@/constants";

export const Header = () => {
	const { logoutHandler } = useAuth();
	const pathname = usePathname();
	const [_, setPreviousPath] = useLocalStorage(PREVIOUS_PATHNAME_KEY, pathname);

	const onAuthPageClick = () => {
		setPreviousPath(pathname);
	};

	return (
		<header>
			<Logo />

			<nav>
				<ul>
					<li><Link href={AppRoutes.HOME}>Главная</Link></li>
					<li>
						<Link href={AppRoutes.LOGIN} onClick={onAuthPageClick}>Войти</Link>
					</li>
					<li>
						<Link href={AppRoutes.REGISTER} onClick={onAuthPageClick}>Регистрация</Link>
					</li>
					<li><Button onClick={logoutHandler} >Выйти</Button></li>
				</ul>
			</nav>
		</header >
	);
};
