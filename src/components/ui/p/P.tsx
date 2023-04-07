import React from 'react';
import cn from 'classnames';

import { PProps } from './P.type';

import styles from './P.module.scss';

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(className, 'p',
				{ [styles.s]: size === 's' },
				{ [styles.m]: size === 'm' },
				{ [styles.l]: size === 'l' },
			)}
			{...props}
		>
			{children}
		</p>
	);
};
