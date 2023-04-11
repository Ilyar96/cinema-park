import { getMovies } from "@/api/movieApi";
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
	// const state = store.getState();

	await store.dispatch(getMovies.initiate());

	return { props: { initialReduxState: store.getState() } };
};

export default withLayout(Home);
