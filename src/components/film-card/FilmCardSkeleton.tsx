import { FC } from "react";
import ContentLoader from "react-content-loader";
import cn from "classnames";

import { FilmCardSkeletonProps } from "./FilmCard.type";

import styles from "./FilmCard.module.scss";

export const FilmCardSkeleton: FC<FilmCardSkeletonProps> = ({ className, as: Component = "li" }) => (
	<Component className={cn(className, styles.skeletonWrapper)}>
		<ContentLoader
			speed={2}
			width={166}
			height={245}
			viewBox="0 0 166 245"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="8" y="217" rx="3" ry="3" width="44" height="20" />
			<rect x="98" y="217" rx="3" ry="3" width="60" height="20" />
			<rect x="23" y="182" rx="3" ry="3" width="120" height="21" />
			<rect x="8" y="8" rx="3" ry="3" width="35" height="20" />
		</ContentLoader>
	</Component>
);