import { Genres } from "@/@types/query";
import { BreadcrumbsItem } from "@/components/breadcrumbs/Breadcrumbs.type";

export interface FilmsPageProps {
	breadcrumbLinks?: BreadcrumbsItem[];
	type?: Genres;
}
