import type { AppProps } from 'next/app';
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { useStore } from "@/store/store";
import "normalize.css";
import '@/assets/styles/variables.scss';
import '@/assets/styles/common.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { getScrollbarWidth, setCssVariable } from "@/helpers";

const App = ({ Component, pageProps }: AppProps) => {
	const store = useStore(pageProps.initialReduxState);

	useEffect(() => {
		const scrollbarWidth = getScrollbarWidth();
		setCssVariable("--scrollbar-width", scrollbarWidth + "px");
	});

	return <>
		<Provider store={store} >
			<Head>
				<title>
					Фильмы смотреть онлайн, в хорошем HD 720 - 1080 качестве бесплатно
				</title>
				<meta name="description" content="Смотрите лучшие фильмы онлайн, в хорошем HD качестве совершенно бесплатно и без регистрации!" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</Provider>
		<ToastContainer />
	</>;
};

export default App;


