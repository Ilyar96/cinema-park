import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { useStore } from "@/store/store";
import "normalize.css";
import '@/assets/styles/variables.scss';
import '@/assets/styles/common.scss';

const App = ({ Component, pageProps }: AppProps) => {
	const store = useStore(pageProps.initialReduxState);

	return <Provider store={store}>
		<Component {...pageProps} />
	</Provider>;
};

export default App;


