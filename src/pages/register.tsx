import { useEffect } from "react";
import Head from "next/head";
import { RegisterForm } from '../components/register-form/RegisterForm';
import { AuthPage } from "@/page-components";
import { SITE_NAME } from "@/constants";
import { setTitle } from "@/helpers";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/store";
import { getAuthStatus } from "@/store/reducers/auth/selectors";
import { AuthStatus } from "@/store/reducers/auth/types";
import { AppRoutes } from "@/constants/routes";

const Register = () => {
	const { checkAuth } = useAuth();
	const { replace } = useRouter();
	const authStatus = useAppSelector(getAuthStatus);

	useEffect(checkAuth, []);

	useEffect(() => {
		if (authStatus === AuthStatus.AUTH) {
			replace(AppRoutes.HOME);
		}
	}, [authStatus]);

	return (
		<>
			<Head>
				<title>{setTitle("Регистрация")}</title>
				<meta name="description" content={`Регистрация на сайте ${SITE_NAME}`} />
			</Head>
			<AuthPage title="Регистрация">
				<RegisterForm />
			</AuthPage>
		</>
	);
};

export default Register;
