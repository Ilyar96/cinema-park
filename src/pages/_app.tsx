import { useStore } from "@/store/store";
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	return <Provider store={store}>
		<Component {...pageProps} />
	</Provider>;
}


