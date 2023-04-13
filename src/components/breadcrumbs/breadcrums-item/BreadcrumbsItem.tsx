import React, { FC } from 'react';
import Link from "next/link";
import { BreadcrumbsItem as IBreadcrumbsItem } from "../Breadcrumbs.type";
import styles from "./BreadcrumbsItem.module.scss";

export const BreadcrumbsItem: FC<IBreadcrumbsItem> = ({ href, title }) => {

	if (!href) {
		return <span className={styles.current}>{title}</span>;
	}

	return (
		<Link href={href}>{title}</Link>
	);
};
