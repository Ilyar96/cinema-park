import React, { FC } from 'react';
import cn from "classnames";

import { InfoWrapperProps } from "./InfoWrapper.type";

import styles from "./InfoWrapper.module.scss";
import { Container } from "../ui";

export const InfoWrapper: FC<InfoWrapperProps> = ({ children, className }) => {
	return (
		<section className={cn(styles.wrapper, className)}>
			<Container className={styles.container}>{children}</Container>
		</section>
	);
};
