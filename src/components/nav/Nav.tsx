import React, { FC } from 'react';
import Link from "next/link";
import { NavProps } from "./Nav.type";
import { AppRoutes } from "@/constants/routes";
import styles from "./Nav.module.scss";

export const Nav: FC<NavProps> = (props) => {
	return (
		<nav {...props}>
			<ul className={styles.wrapper}>
				<li><Link href={AppRoutes.HOME}>Главная</Link></li>
			</ul>
		</nav>
	);
};
