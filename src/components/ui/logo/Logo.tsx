import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import Image from "next/image";

import { AppRoutes } from "@/components/constants/routes";
import { LogoProps } from "./Logo.type";

import styles from "./Logo.module.scss";
import logoIcon from "@/assets/images/logo.png";

export const Logo: FC<LogoProps> = ({ className }) => {
	const { pathname } = useRouter();

	const imageLayout = (
		<Image
			className={styles.image}
			width={570}
			height={100}
			src={logoIcon.src}
			alt="Логотип"
			priority={true}
		/>
	);

	if (pathname === AppRoutes.HOME) {
		return <div className={cn(styles.logo, className)}>{imageLayout}</div>;
	}

	return (
		<Link href={AppRoutes.HOME} className={cn(styles.logo, className)}>
			{imageLayout}
		</Link>
	);
};
