import React, { FC } from 'react';
import cn from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';

import { FilmCard } from "../";
import { Container, Htag } from "../ui";
import { SimilarFilmsProps } from "./SimilarFilms.type";

import 'swiper/scss';
import "swiper/scss/pagination";
import styles from "./SimilarFilms.module.scss";

export const SimilarFilms: FC<SimilarFilmsProps> = ({ films, title, className }) => {
	return (
		<section className={cn(styles.similarFilms, className)}>
			<Container className={styles.container}>
				{title && <Htag tag="h2">{title}</Htag>}

				<Swiper
					modules={[Mousewheel, Pagination]}
					spaceBetween={12}
					slidesPerView={2}
					mousewheel={true}
					pagination={{
						clickable: true
					}}
					breakpoints={{
						320: {
							slidesPerView: 2,
						},
						479: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 4,
						},
						991: {
							slidesPerView: 5,
						},
						1200: {
							slidesPerView: 6,
						}
					}}
				>
					{films.map((film) => (
						<SwiperSlide key={film.id}>
							<FilmCard film={film} key={film.id} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</section>
	);
};
