import { FC, PropsWithChildren } from 'react';
import styles from "./Layout.module.scss";
import { Header, Footer } from './';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
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
