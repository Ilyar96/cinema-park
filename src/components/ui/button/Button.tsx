import React, { FC } from "react";
import { ButtonProps } from "./Button.type";
import styles from "./Button.module.scss";
import cn from "classnames";

export const Button: FC<ButtonProps> = (
	(
		{
			fullWidth,
			align = "start",
			appearance = "primary",
			className,
			children,
			withoutWrapper,
			...props
		}
	) => {

		if (withoutWrapper) {
			return <button className={cn(
				className,
				styles.button,
				styles[appearance],
				{ [styles.fullWidth]: fullWidth }
			)} {...props}>{children}</button>;
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
				)} {...props}>{children}</button>
			</div>
		);
	});
