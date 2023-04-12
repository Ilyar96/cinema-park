import React, { FC } from 'react';
import cn from "classnames";
import { FilmInfoProps } from "./FilmInfo.type";
import styles from "./FilmInfo.module.scss";
import { FilmPreview, FilmDescription } from '../';
import { Container } from "../ui";

export const FilmInfo: FC<FilmInfoProps> = ({ film, className }) => {

	return (
		<Container className={cn(styles.wrapper, className)}>
			<FilmPreview className={styles.preview} film={film} />
			<FilmDescription className={styles.description} film={film} />
		</Container>
	);
};
