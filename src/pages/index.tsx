import { getFilms } from "@/api/filmApi";
import { animeFilters, cartoonsFilters, filmFilters } from "@/constants";
import { withLayout } from "@/hok";
import { HomePage } from "@/page-components";
import { authService } from "@/services/authService";
import { wrapper } from "@/store/store";


const Home = () => {
	return (
		<>
			<HomePage />
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	await authService.serverSideAuthCheck(store, ctx);

	await Promise.allSettled([
		store.dispatch(getFilms.initiate(filmFilters)),
		store.dispatch(getFilms.initiate(cartoonsFilters)),
		store.dispatch(getFilms.initiate(animeFilters)),
	]);

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Home);
