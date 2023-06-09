import { AppRoutes } from "@/components/constants/routes";

export interface BreadcrumbsItem {
	href?: AppRoutes | string;
	title: string;
}

export interface BreadcrumbsProps {
	entities: BreadcrumbsItem[];
	separator?: string;
}
