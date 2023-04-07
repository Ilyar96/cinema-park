import React, { ChangeEvent, FC, forwardRef, useState } from "react";
import { InputProps } from "./Input.type";
import styles from "./Input.module.scss";
import cn from "classnames";

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ errorMessage, className, type = "text", ...props }, ref
	) => {

		return (
			<div className={cn(styles.wrapper, className)}>
				<input
					className={styles.input}
					type={type}
					ref={ref}
					{...props}
				/>
				{errorMessage && <span className={styles.error}>{errorMessage}</span>}
			</div>
		);
	});
