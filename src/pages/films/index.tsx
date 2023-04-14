import { getFilms } from "@/api/filmApi";
import { withLayout } from "@/hok";
import { FilmsPage } from "@/page-components";
import { changeFilter } from "@/store/actions";
import { initStore } from "@/store/store";
import { GetStaticProps } from "next";


const Home = () => {
	return (
		<>
			<FilmsPage />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const store = initStore();
	const { filter } = store.getState();

	await store.dispatch(changeFilter({ ...filter, type: "movie" }));
	await store.dispatch(getFilms.initiate({ ...filter, type: "movie" }));

	return { props: { initialReduxState: store.getState() } };
};

export default withLayout(Home);
