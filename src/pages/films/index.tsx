import { getFilms } from "@/api/filmApi";
import { AppRoutes } from "@/constants/routes";
import { withLayout } from "@/hok";
import { FilmsPage } from "@/page-components";
import { changeFilter } from "@/store/actions";
import { wrapper } from "@/store/store";

const breadcrumbLinks = [{ href: AppRoutes.FILMS, title: "Фильмы" }];


const Films = () => {
	return (
		<>
			<FilmsPage breadcrumbLinks={breadcrumbLinks} />
		</>
	);
};

export const getStaticProps = wrapper.getStaticProps(store => async () => {
	const { filter, filmApi } = store.getState();

	await store.dispatch(getFilms.initiate(filter));

	return {
		props: {
			initialReduxState: store.getState()
		}
	};
});


export default withLayout(Films);
