import React, { FC } from 'react';
import cn from "classnames";
import { ErrorBlockProps } from "./ErrorBlock.type";
import { Container } from "../ui";
import styles from "./ErrorBlock.module.scss";

export const ErrorBlock: FC<ErrorBlockProps> = ({ className, children }) => {
	return (
		<Container className={cn(styles.wrapper, className)}>
			{children}
		</Container>
	);
};
