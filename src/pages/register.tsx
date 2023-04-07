import Head from "next/head";
import { RegisterForm } from '../components/register-form/RegisterForm';
import { AuthPage } from "@/page-components";
import { siteName } from "@/constants";
import { setTitle } from "@/helpers";

const Register = () => {
	return (
		<>
			<Head>
				<title>{setTitle("Регистрация")}</title>
				<meta name="description" content={`Регистрация на сайте ${siteName}`} />
			</Head>
			<AuthPage>
				<RegisterForm />
			</AuthPage>
		</>
	);
};

export default Register;
