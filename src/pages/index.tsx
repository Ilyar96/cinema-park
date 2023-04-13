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
	const { filter } = store.getState();

	await store.dispatch(getFilms.initiate(filter));

	return { props: { initialReduxState: store.getState() } };
};

export default withLayout(Home);
