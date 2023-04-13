import Head from "next/head";
import { LoginForm } from "@/components";
import { AuthPage } from "@/page-components";
import { SITE_NAME } from "@/constants";
import { setTitle } from "@/helpers";

const Login = () => {
	return (
		<>
			<Head>
				<title>{setTitle("Добро пожаловать")}</title>
				<meta property="title" content={`Регистрация на сайте ${SITE_NAME}`} />
			</Head>
			<AuthPage title="Авторизация">
				<LoginForm />
			</AuthPage>
		</>
	);
};

export default Login;
