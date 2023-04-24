import React, { FC } from 'react';
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import Image from "next/image";

import { GalleryProps } from "./Gallery.type";
import { Container, Htag } from "../ui";
import { useGetImagesByFilmIdQuery } from "@/api/filmApi";

import styles from "./Gallery.module.scss";

export const Gallery: FC<GalleryProps> = ({ filmId, title, className }) => {
	const { data } = useGetImagesByFilmIdQuery(String(filmId));

	if (!data) {
		return null;
	}

	return (
		<section className={cn(styles.gallery, className)}>
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
						991: {
							slidesPerView: 4,
						},
					}}
				>
					{data.docs.map((image) => (
						<SwiperSlide key={image.id}>
							<div className={styles.imageWrapper} >
								<Image
									className={styles.image}
									src={image.url}
									width={360}
									height={240}
									alt=""
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</section >
	);
};
