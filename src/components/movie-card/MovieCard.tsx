import React, { FC } from 'react';
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { MovieItemProps } from "./MovieCard.type";
import { AppRoutes } from "@/constants/routes";
import styles from "./MovieCard.module.scss";
import PlaySvg from '@/assets/images/play.svg';

export const MovieCard: FC<MovieItemProps> = ({ movie, as: Component = "li", className }) => {
	const { id, year, rating, name, poster } = movie;
	const { kp, imdb } = rating;
	const { previewUrl } = poster;

	return (
		<Component className={styles.item}>
			<Link href={AppRoutes.MOVIE} className={cn(styles.card, className)} >
				<Image
					className={styles.preview}
					src={previewUrl}
					alt={name}
					width={360}
					height={540}
				/>

				<div className={styles.content}>
					<span className={styles.year}>{year}</span>
					<span className={styles.title}>{name}</span>
					{(kp || imdb) && <span className={styles.rates}>
						{kp && <span className={styles.kp}>
							<span className={styles.kpValue}>{kp}</span>
						</span>}
						{imdb && <span className={styles.imdb}>
							<span className={styles.imdbValue}>{imdb}</span>
						</span>}
					</span>}
				</div>

				<div className={styles.mask}>
					<div className={styles.play}><PlaySvg /></div>
				</div>
			</Link>
		</Component>
	);
};
