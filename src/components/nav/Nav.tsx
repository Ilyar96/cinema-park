import React, { FC } from 'react';
import Link from "next/link";

import { NavProps } from "./Nav.type";
import { navList } from "@/constants";

import styles from "./Nav.module.scss";

export const Nav: FC<NavProps> = (props) => {
	const navListLayout = navList.map(({ href, title }) => (
		<li><Link href={href}>{title}</Link></li>
	));

	return (
		<nav {...props}>
			<ul className={styles.wrapper}>
				{navListLayout}
			</ul>
		</nav>
	);
};
