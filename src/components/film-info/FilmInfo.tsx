import React, { FC } from 'react';
import cn from "classnames";

import { FilmInfoProps } from "./FilmInfo.type";
import { FilmPreview, FilmDescription, InfoWrapper } from '../';

import styles from "./FilmInfo.module.scss";

export const FilmInfo: FC<FilmInfoProps> = ({ film, className }) => {

	return (
		<InfoWrapper className={cn(styles.wrapper, className)}>
			<FilmPreview className={styles.preview} film={film} />
			<FilmDescription className={styles.description} film={film} />
		</InfoWrapper>
	);
};
