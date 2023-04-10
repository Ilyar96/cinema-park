import { FC, PropsWithChildren, useEffect } from 'react';
import styles from "./Layout.module.scss";
import { Header, Footer } from './';
import { useAuth } from '../hooks/useAuth';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { checkAuth } = useAuth();

	useEffect(checkAuth, []);

	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
