import React, { FC } from 'react';
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { FilmCardProps } from "./FilmCard.type";
import styles from "./FilmCard.module.scss";
import PlaySvg from '@/assets/images/play.svg';
import { useRouter } from "next/router";
import { getBreadcumbsItemByPathanme } from "@/helpers";

export const FilmCard: FC<FilmCardProps> = ({ film, as: Component = "li", className }) => {
	const { asPath, pathname } = useRouter();
	const { id, year, rating, name, poster, alternativeName } = film;
	const href = getBreadcumbsItemByPathanme(pathname).href;

	return (
		<Component className={styles.item}>
			<Link
				href={{
					pathname: href + id,
					query: { returnUrl: asPath }
				}}
				className={cn(styles.card, className)}
			>
				{poster?.previewUrl && <Image
					className={styles.preview}
					src={poster.previewUrl}
					alt={name}
					width={360}
					height={540}
				/>}

				<span className={styles.content}>
					{year && <span className={styles.year}>{year}</span>}
					<span className={styles.title}>{name ? name : alternativeName}</span>
					{rating && (Boolean(rating.kp) || Boolean(rating.imdb)) && <span className={styles.rates}>
						{Boolean(rating.kp) && <span className={styles.kp}>
							<span className={styles.kpValue}>{rating.kp.toFixed(1)}</span>
						</span>}
						{Boolean(rating.imdb) && <span className={styles.imdb}>
							<span className={styles.imdbValue}>{rating.imdb.toFixed(1)}</span>
						</span>}
					</span>}
				</span>

				<span className={styles.mask}>
					<span className={styles.play}><PlaySvg /></span>
				</span>
			</Link>
		</Component>
	);
};
