import React, { FC, MouseEvent } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import { ButtonProps } from "./Button.type";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = (
	(
		{
			fullWidth,
			align = "start",
			appearance = "primary",
			className,
			children,
			withoutWrapper,
			href,
			onClick,
			returnUrl,
			...props
		}
	) => {
		const { push } = useRouter();

		const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
			onClick && onClick(e);

			if (href) {
				const query = returnUrl ? { returnUrl: returnUrl } : null;

				push({
					pathname: href,
					query
				});
			}
		};

		if (withoutWrapper) {
			return <button className={cn(
				className,
				styles.button,
				styles[appearance],
				{ [styles.fullWidth]: fullWidth }
			)}
				onClick={clickHandler}
				{...props}
			>
				{children}
			</button>;
		}

		return (
			<div className={cn(
				styles.wrapper,
				className,
				styles[align]
			)}>
				<button className={cn(
					styles.button,
					styles[appearance],
					{ [styles.fullWidth]: fullWidth }
				)}
					onClick={clickHandler}
					{...props}
				>
					{children}
				</button>
			</div>
		);
	});
