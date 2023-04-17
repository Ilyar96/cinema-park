import { getFilms } from "@/api/filmApi";
import { withLayout } from "@/hok";
import { FilmsPage } from "@/page-components";
import { changeFilter } from "@/store/actions";
import { initStore, wrapper } from "@/store/store";
import { GetStaticProps } from "next";


const Films = () => {
	return (
		<>
			<FilmsPage />
		</>
	);
};

export const getStaticProps = wrapper.getStaticProps(store => async () => {
	const { filter } = store.getState();

	await store.dispatch(getFilms.initiate(filter));

	return { props: { initialReduxState: store.getState() } };
});

export default withLayout(Films);
