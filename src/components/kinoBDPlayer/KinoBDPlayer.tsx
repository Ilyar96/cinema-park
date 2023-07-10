import React, { FC, useEffect } from "react";
import { KinoBDPlayerProps } from "./KinoBDPlayer.type";
import { Container, Htag } from "../ui";
import styles from "./KinoBDPlayer.module.scss";

export const KinoBDPlayer: FC<KinoBDPlayerProps> = ({ film }) => {
	const { id, name } = film;

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "/assets/js/player.js";
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

	return (
		<Container>
			<Htag className={styles.title} tag="h2" center>
				Смотреть {name} в HD 720-1080 хорошем качестве
			</Htag>
			<div className={styles.wrapper}>
				<div data-kinopoisk={id} id="kinobd" />
			</div>
		</Container>
	);
};
