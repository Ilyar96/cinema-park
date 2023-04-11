import Head from "next/head";
import { RegisterForm } from '../components';
import { AuthPage } from "@/page-components";
import { SITE_NAME } from "@/constants";
import { setTitle } from "@/helpers";

const Register = () => {
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
