import React, { FC, Fragment } from 'react';
import { Container } from "../ui";
import styles from "./Breadcrumbs.module.scss";
import Link from "next/link";
import { BreadcrumbsProps } from './Breadcrumbs.type';
import { AppRoutes } from "@/constants/routes";
import { BreadcrumbsItem } from "./breadcrums-item/BreadcrumbsItem";

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ entities, separator = "»" }) => {
	console.log(1);
	return (
		<Container >
			<div className={styles.wrapper}>
				<Link href={AppRoutes.HOME}>Главная</Link>

				{entities.map(({ title, href }) => (
					<Fragment key={href}>
						<span>{" "} {separator} {" "}</span>
						<BreadcrumbsItem title={title} href={href} />
					</Fragment>
				))}
			</div>
		</Container>
	);
};
