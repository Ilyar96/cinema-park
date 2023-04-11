import React, { FC } from 'react';
import { MovieItemProps } from "./MovieCard.type";
import Link from "next/link";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
import { AppRoutes } from "@/constants/routes";

export const MovieCard: FC<MovieItemProps> = ({ movie, as: Component = "li", className }) => {
	const { year, rating, name, poster } = movie;
	const { kp, imdb } = rating;
	const { previewUrl } = poster;

	return (
		<Component>
			<Link href={AppRoutes.MOVIE} >
				<Image src={previewUrl} alt={name} width={360} height={540} />

				<span className={styles.year}>{year}</span>
				<span className={styles.title}>{name}</span>
				<span className={styles.footer}>
					<span className={styles.kp}>
						<span className={styles.kpTitle}>kp</span>
						<span className={styles.kpValue}>{kp}</span>
					</span>
					<span className={styles.imdb}>
						<span className={styles.imdbTitle}>imdb</span>
						<span className={styles.imdbValue}>{imdb}</span>
					</span>
				</span>
			</Link>
		</Component>
	);
};
