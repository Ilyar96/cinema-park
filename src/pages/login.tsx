import Head from "next/head";
import { LoginForm } from "@/components";
import { AuthPage } from "@/page-components";
import { siteName } from "@/constants";
import { setTitle } from "@/helpers";

const Login = () => {
	return (
		<>
			<Head>
				<title>{setTitle("Добро пожаловать")}</title>
				<meta name="description" content={`Регистрация на сайте ${siteName}`} />
			</Head>
			<AuthPage>
				<LoginForm />
			</AuthPage>
		</>
	);
};

export default Login;
