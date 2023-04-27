import { FC, useEffect } from "react";
import { useRouter } from "next/router";

import { Logo, Htag, Spinner } from "@/components/ui";
import { AuthPageProps } from "./Auth.type";
import { useAppSelector } from "@/store/store";
import { getAuthStatus } from "@/store/reducers/auth/selectors";
import { AuthStatus } from "@/store/reducers/auth/types";
import { AppRoutes } from "@/components/constants/routes";
import { isString } from "@/@types";

import styles from "./Auth.module.scss";

export const AuthPage: FC<AuthPageProps> = ({ title, children }) => {
	const { replace, query } = useRouter();
	const authStatus = useAppSelector(getAuthStatus);

	useEffect(() => {
		if (authStatus === AuthStatus.AUTH) {
			query?.returnUrl && isString(query?.returnUrl) ?
				replace(query.returnUrl) :
				replace(AppRoutes.HOME);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authStatus]);

	if (authStatus === AuthStatus.AUTH) {
		return null;
	}


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
