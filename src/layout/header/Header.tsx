import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { Nav, MenuUserDetails, MobileMenu } from '../../components';
import { AppRoutes } from "@/constants/routes";
import { Button, Container, Logo } from "@/components/ui";
import { PREVIOUS_PATHNAME_KEY } from "@/constants";
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";
import styles from "./Header.module.scss";

export const Header = () => {
	const pathname = usePathname();
	const { push } = useRouter();
	const user = useAppSelector(getUser);
	const [_, setPreviousPath] = useLocalStorage(PREVIOUS_PATHNAME_KEY, pathname);

	const onClick = () => {
		setPreviousPath(pathname);
		push(AppRoutes.LOGIN);
	};

	//TODO Переместить кнопку входа на мобильной версии
	return (
		<header className={styles.header}>
			<Container className={styles.container}>
				<Logo className={styles.logo} />
				<MobileMenu className={styles.mobileMenu} />
				<Nav className={styles.desktopMenu} />
				{user ?
					<MenuUserDetails /> :
					<Button onClick={onClick}>Войти</Button>}
			</Container>
		</header >
	);
};
