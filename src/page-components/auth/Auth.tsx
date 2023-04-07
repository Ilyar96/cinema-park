import { FC, PropsWithChildren } from "react";
import styles from "./Auth.module.scss";

export const AuthPage: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.container}>{children}		</div>
	);
};
