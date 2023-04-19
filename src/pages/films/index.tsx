import { getFilms } from "@/api/filmApi";
import { AppRoutes } from "@/constants/routes";
import { withLayout } from "@/hok";
import { FilmsPage } from "@/page-components";
import { changeFilter } from "@/store/actions";
import { initStore, wrapper } from "@/store/store";
import { GetStaticProps } from "next";

const breadcrumbLinks = [{ href: AppRoutes.FILMS, title: "Фильмы" }];


const Films = () => {
	return (
		<>
			<FilmsPage breadcrumbLinks={breadcrumbLinks} />
		</>
	);
};

// export const getStaticProps: GetStaticProps =
// 	async () => {
// 		const store = initStore();
// 		const { filter } = store.getState();

// 		await store.dispatch(getFilms.initiate(filter));

// 		return { props: { initialReduxState: store.getState() } };
// 	};

export default withLayout(Films);
