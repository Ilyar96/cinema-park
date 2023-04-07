import { FC } from "react";
import cn from 'classnames';
import { HtagProps } from './Htag.type';
import styles from './Htag.module.scss';

export const Htag: FC<HtagProps> = ({ tag: Component, className, center, children, ...props }) => {

	return <Component
		className={cn(className, styles[Component], { [styles.center]: center })}
		{...props}>
		{children}
	</Component>;
};
