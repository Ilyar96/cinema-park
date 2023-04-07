import React, { ChangeEvent, FC, forwardRef, useState } from "react";
import { InputProps } from "./Input.type";
import styles from "./Input.module.scss";
import cn from "classnames";

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ errorMessage, className, type = "text", ...props }, ref
	) => {
		const [value, setValue] = useState('');

		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
			setValue(e.target.value);
		};

		return (
			<div className={cn(styles.wrapper, className)}>
				<input
					className={styles.input}
					value={value}
					onChange={onChange}
					{...props}
					ref={ref}
				/>
				{errorMessage && <span className={styles.error}>{errorMessage}</span>}
			</div>
		);
	});
