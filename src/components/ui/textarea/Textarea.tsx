import React, { forwardRef } from "react";
import cn from "classnames";
import { TextareaProps } from "./Textarea.type";
import styles from "./Textarea.module.scss";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{ errorMessage, className, ...props }, ref
	) => {

		return (
			<div className={cn(styles.wrapper, className)}>
				<textarea
					className={styles.textarea}
					ref={ref}
					{...props}
				/>
				{errorMessage && <span className={styles.error}>{errorMessage}</span>}
			</div>
		);
	});
