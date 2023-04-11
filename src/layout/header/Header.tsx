import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { Logo, Nav, MenuUserBtn, MenuUserDetails } from '../../components';
import { AppRoutes } from "@/constants/routes";
import { Button, Container } from "@/components/ui";
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

	return (
		<header className={styles.header}>
			<Container fluid className={styles.container}>
				<Logo className={styles.logo} />
				{/* TODO Remove inline style */}
				<Nav style={{ marginRight: 20 }} />
				{/* <Button onClick={logoutHandler}>Выйти</Button> */}
				{user ?
					<MenuUserDetails /> :
					<Button onClick={onClick}>Войти</Button>}
			</Container>
		</header >
	);
};
