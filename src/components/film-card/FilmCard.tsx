import React, { FC } from 'react';
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { FilmCardProps } from "./FilmCard.type";
import { AppRoutes } from "@/constants/routes";
import styles from "./FilmCard.module.scss";
import PlaySvg from '@/assets/images/play.svg';

export const FilmCard: FC<FilmCardProps> = ({ film, as: Component = "li", className }) => {
	const { id, year, rating, name, poster, alternativeName } = film;

	return (
		<Component className={styles.item}>
			<Link href={AppRoutes.FILMS + id} className={cn(styles.card, className)} >
				{poster?.previewUrl && <Image
					className={styles.preview}
					src={poster.previewUrl}
					alt={name}
					width={360}
					height={540}
				/>}

				<div className={styles.content}>
					{year && <span className={styles.year}>{year}</span>}
					<span className={styles.title}>{name ? name : alternativeName}</span>
					{rating && (Boolean(rating.kp) || Boolean(rating.imdb)) && <span className={styles.rates}>
						{Boolean(rating.kp) && <span className={styles.kp}>
							<span className={styles.kpValue}>{rating.kp}</span>
						</span>}
						{Boolean(rating.imdb) && <span className={styles.imdb}>
							<span className={styles.imdbValue}>{rating.imdb}</span>
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
