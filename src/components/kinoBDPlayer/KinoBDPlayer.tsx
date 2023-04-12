import React, { FC, useEffect } from 'react';
import { KinoBDPlayerProps } from "./KinoBDPlayer.type";
import { Container } from "../ui";
import styles from "./KinoBDPlayer.module.scss";

export const KinoBDPlayer: FC<KinoBDPlayerProps> = ({ id }) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/assets/js/player.js';
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

	console.log("styles.wrapper: ", styles.wrapper);
	return (
		<Container>
			<div className={styles.wrapper}>
				<div data-kinopoisk={id} id="kinobd" />
			</div>
		</Container>
	);
};
