import { FC, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useAuth } from "@/hooks";
import { Logo } from "@/components";
import { Htag } from "@/components/ui";
import { AuthPageProps } from "./Auth.type";
import styles from "./Auth.module.scss";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { PREVIOUS_PATHNAME_KEY } from "@/constants";
import { AppRoutes } from "@/constants/routes";
import { getAuthStatus } from "@/store/reducers/auth/selectors";
import { AuthStatus } from "@/store/reducers/auth/types";

export const AuthPage: FC<AuthPageProps> = ({ title, children }) => {
	const [previousPath] = useLocalStorage(PREVIOUS_PATHNAME_KEY, AppRoutes.HOME);
	const { replace } = useRouter();
	const authStatus = useAppSelector(getAuthStatus);
	const { checkAuth } = useAuth();

	useEffect(checkAuth, []);

	useEffect(() => {
		if (authStatus === AuthStatus.AUTH) {
			replace(previousPath);
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
