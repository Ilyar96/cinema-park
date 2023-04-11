import React, { FC } from 'react';
import cn from "classnames";
import { ContainerProps } from "./Container.type";
import styles from "./Container.module.scss";

export const Container: FC<ContainerProps> = ({ fluid, className, children, ...props }) => {
	return (
		<div className={cn(
			styles.container,
			className,
			{ [styles.fluid]: fluid }
		)} {...props}>{children}</div>
	);
};
