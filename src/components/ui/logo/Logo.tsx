import { FC } from 'react';
import Link from "next/link";
import cn from "classnames";
import { useRouter } from 'next/router';
import { SITE_NAME } from '../../../constants';
import { AppRoutes } from "@/constants/routes";
import { LogoProps } from "./Logo.type";
import styles from "./Logo.module.scss";

export const Logo: FC<LogoProps> = ({ className }) => {
	const { pathname } = useRouter();
	//TODO поменять лого

	if (pathname === AppRoutes.HOME) {
		return <div className={cn(styles.logo, className)}>
			{SITE_NAME}
		</div>;
	}

	return (
		<Link
			href={AppRoutes.HOME}
			className={cn(styles.logo, className)}
		>
			{SITE_NAME}
		</Link>
	);
};
