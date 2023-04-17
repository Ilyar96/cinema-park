import React, { FC } from 'react';
import Image from "next/image";
import cn from "classnames";
import { FillingCircle } from "../";
import { FilmPreviewProps } from "./FilmPreview.type";
import styles from "./FilmPreview.module.scss";

export const FilmPreview: FC<FilmPreviewProps> = ({ className, film }) => {
	const { rating, poster, name } = film;
	const { kp, imdb } = rating;

	return (
		<div className={cn(styles.preview, className)}>
			{poster?.previewUrl ?
				<Image
					src={poster ? poster.url : ""}
					className={styles.poster}
					alt={name}
					width={200}
					height={282}
				/> :
				<div className={styles.emptyPoster} />}

			<div className={styles.rates}>
				<div className={styles.kp}>
					<FillingCircle size={40} uploadingProgress={kp * 10} value={kp.toFixed(1)} />
				</div>
				<div className={styles.imdb}>
					<FillingCircle size={40} uploadingProgress={imdb * 10} value={imdb.toFixed(1)} />
				</div>
			</div>
		</div>
	);
};
