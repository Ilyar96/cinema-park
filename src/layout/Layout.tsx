import { FC, PropsWithChildren, useEffect } from 'react';
import styles from "./Layout.module.scss";
import { Header, Footer } from './';
import { useAuth } from '../hooks/useAuth';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { checkAuth } = useAuth();

	useEffect(() => {
		checkAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};