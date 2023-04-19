import React from 'react';
import { Container, Logo } from "@/components/ui";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.wrapper}>
				<Logo />
				<a href="mailto:cinema.park.support@gmail.com">cinema.park.support@gmail.com</a>
			</Container>
		</footer>
	);
};
