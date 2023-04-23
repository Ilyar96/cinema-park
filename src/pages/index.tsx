import { getFilms } from "@/api/filmApi";
import { withLayout } from "@/hok";
import { FilmsPage } from "@/page-components";
import { authService } from "@/services/authService";
import { wrapper } from "@/store/store";


const Home = () => {
	return (
		<>
			<FilmsPage />
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	await authService.serverSideAuthCheck(store, ctx);
	await store.dispatch(getFilms.initiate(store.getState().filter));

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Home);
