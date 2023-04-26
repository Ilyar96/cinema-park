import React, { FC } from 'react';

import { FilmDetailItemProps } from "./FilmDetailItem.type";

import styles from "./FilmDetailItem.module.scss";
import cn from "classnames";

export const FilmDetailItem: FC<FilmDetailItemProps> = ({ title, children, className }) => {

	return (
		<div className={cn(className, styles.item)}>
			<b>{title}: {" "}</b>
			{children}
		</div>
	);
};
