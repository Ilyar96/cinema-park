import { FC } from "react";
import { Logo } from "@/components";
import { Htag } from "@/components/ui";
import { AuthPageProps } from "./Auth.type";
import styles from "./Auth.module.scss";

export const AuthPage: FC<AuthPageProps> = ({ title, children }) => {
	return (
		<div className={styles.container}>
			<Logo className={styles.logo} />

			<div className={styles.wrapper}>
				{title && <Htag className={styles.title} tag="h1" center>{title}</Htag>}
				{children}
			</div>
		</div>
	);
};
