import React, { forwardRef } from "react";
import cn from "classnames";
import { FileInputProps } from "./FileInput.type";
import styles from "./FileInput.module.scss";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	(
		{ errorMessage, className, type = "text", children, onLabelKeyDown, ...props }, ref
	) => {
		return (
			<div className={cn(styles.wrapper, className)}>
				<label
					className={styles.label}
					tabIndex={0}
					onKeyDown={onLabelKeyDown}
				>
					{children}
					<input
						className={styles.fileInput}
						type="file"
						ref={ref}
						hidden
						{...props}
					/>
				</label>
				{errorMessage && <span className={styles.error}>{errorMessage}</span>}
			</div>
		);
	});
