import { FC, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/hooks";
import { Logo, Htag } from "@/components/ui";
import { AuthPageProps } from "./Auth.type";
import { useAppSelector } from "@/store/store";
import { getAuthStatus } from "@/store/reducers/auth/selectors";
import { AuthStatus } from "@/store/reducers/auth/types";

import styles from "./Auth.module.scss";
import { AppRoutes } from "@/constants/routes";
import { isString } from "@/@types";

export const AuthPage: FC<AuthPageProps> = ({ title, children }) => {
	const { replace, query } = useRouter();
	const authStatus = useAppSelector(getAuthStatus);
	const { checkAuth } = useAuth();

	useEffect(checkAuth, []);

	useEffect(() => {
		if (authStatus === AuthStatus.AUTH) {
			query?.returnUrl && isString(query?.returnUrl) ?
				replace(query.returnUrl) :
				replace(AppRoutes.HOME);
		}
	}, [authStatus]);


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
