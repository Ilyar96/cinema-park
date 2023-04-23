import Head from "next/head";

import { LoginForm } from "@/components";
import { AuthPage } from "@/page-components";
import { SITE_NAME } from "@/constants";
import { setTitle } from "@/helpers";
import { wrapper } from "@/store/store";
import { authService } from "@/services/authService";

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

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	await authService.serverSideAuthCheck(store, ctx);

	return { props: { initialReduxState: store.getState() } };
});


export default Login;
