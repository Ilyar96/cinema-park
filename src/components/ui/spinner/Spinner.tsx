import React, { FC } from "react";
import cn from "classnames";
import { SpinnerProps } from "./Spinner.type";
import styles from "./Spinner.module.scss";

export const Spinner: FC<SpinnerProps> = ({ className }) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<div className={styles.spinner}>
				{Array.from(Array(12)).map((_, i) => (
					<div key={i} />
				))}
			</div>
		</div>
	);
};
