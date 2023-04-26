import { breadcrumbLinks } from "@/components/constants";
import { AppRoutes } from "@/components/constants/routes";

export const getBreadcumbsItemByPathanme = (pathname: string) => {
	if (pathname.indexOf(AppRoutes.CARTOONS.slice(0, -1)) !== -1) {
		return breadcrumbLinks.cartoons;
	}

	if (pathname.indexOf(AppRoutes.ANIME.slice(0, -1)) !== -1) {
		return breadcrumbLinks.anime;
	}

	return breadcrumbLinks.films;
};
