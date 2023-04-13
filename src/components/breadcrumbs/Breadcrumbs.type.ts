import { AppRoutes } from "@/constants/routes";

export interface BreadcrumbsItem {
	href?: AppRoutes;
	title: string;
}

export interface BreadcrumbsProps {
	entities: BreadcrumbsItem[];
	separator?: string;
}
