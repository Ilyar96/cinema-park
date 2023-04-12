import React, { FC } from 'react';
import { FilmDetailItemProps } from "./FilmDetailItem.type";

export const FilmDetailItem: FC<FilmDetailItemProps> = ({ title, children, className }) => {

	return (
		<div className={className}>
			<b>{title}: {" "}</b>
			<span>{children}</span>
		</div>
	);
};
