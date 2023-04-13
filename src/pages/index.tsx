import { getFilms } from "@/api/filmApi";
import { withLayout } from "@/hok";
import { HomePage } from "@/page-components";
import { initStore } from "@/store/store";
import { GetStaticProps } from "next";


const Home = () => {
	return (
		<>
			<HomePage />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const store = initStore();

	await store.dispatch(getFilms.initiate());

	return { props: { initialReduxState: store.getState() } };
};

export default withLayout(Home);
