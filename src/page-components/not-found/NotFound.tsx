import Image from "next/image";
import Link from "next/link";

import { Container, Htag } from "@/components/ui";
import { AppRoutes } from "@/components/constants/routes";

import styles from "./NotFound.module.scss";
import imageUrl from '../../assets/images//cat-dog-vacation-summer.jpg';

export const NotFound = () => {
	return <section className={styles.notFound} >
		<Container className={styles.container}>
			<Htag tag="h1" center><b>404. Страница не найдена</b></Htag>
			<Image className={styles.image} src={imageUrl} alt="" width={792} height={503} />
			<Htag tag="h2" center><b>Похоже, эта страница ушла в отпуск</b></Htag>
			<Link href={AppRoutes.HOME} className={styles.link}>Вернуться на главную</Link>
		</Container>
	</section>;
};