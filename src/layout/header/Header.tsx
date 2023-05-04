import React from 'react';

import { Nav, MenuUserDetails, MobileMenu } from '../../components';
import { AppRoutes } from "@/components/constants/routes";
import { Button, Container, Logo } from "@/components/ui";
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";

import styles from "./Header.module.scss";
import { useRouter } from "next/router";

export const Header = () => {
	const { asPath } = useRouter();
	const user = useAppSelector(getUser);

	return (
		<header className={styles.header}>
			<Container className={styles.container}>
				<Logo className={styles.logo} />
				<MobileMenu className={styles.mobileMenu} />
				<Nav className={styles.desktopMenu} />
				<div className={styles.menuRight}>
					{user ?
						<MenuUserDetails /> :
						<Button href={AppRoutes.LOGIN} returnUrl={asPath}>Войти</Button>}
				</div>
			</Container>
		</header >
	);
};
