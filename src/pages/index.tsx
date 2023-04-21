import { getFilms } from "@/api/filmApi";
import { withLayout } from "@/hok";
import { FilmsPage } from "@/page-components";
import { changeFilter, changePage } from "@/store/actions";
import { makeStore, wrapper } from "@/store/store";
import { GetStaticProps } from "next";


const Home = () => {

	return (
		<>
			<FilmsPage />
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
	// await store.dispatch(changeFilter({ "genres.name": "аниме" }));
	await store.dispatch(getFilms.initiate(store.getState().filter));

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Home);
