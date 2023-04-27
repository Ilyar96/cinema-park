import { getFilms } from "@/api/filmApi";
import { withLayout } from "@/hok";
import { FilmsPage } from "@/page-components";
import { authService } from "@/services/authService";
import { changeFilter } from "@/store/actions";
import { wrapper } from "@/store/store";

const breadcrumbLinks = [{ title: "Фильмы" }];


const Films = () => {
	return (
		<>
			<FilmsPage breadcrumbLinks={breadcrumbLinks} />
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
	const query = ctx.query;
	await authService.serverSideAuthCheck(store, ctx);
	store.dispatch(changeFilter(query));
	await store.dispatch(getFilms.initiate(store.getState().filter));

	return { props: { initialReduxState: store.getState() } };
});


export default withLayout(Films);
