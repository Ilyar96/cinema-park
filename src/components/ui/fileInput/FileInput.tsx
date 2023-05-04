import React, { DragEvent, MouseEvent, forwardRef, useState } from "react";
import cn from "classnames";
import { FileInputProps } from "./FileInput.type";
import styles from "./FileInput.module.scss";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	(
		{
			errorMessage,
			className,
			children,
			onLabelKeyDown,
			onFileChange,
			isDraggable = false,
			...props
		}, ref
	) => {
		const [drag, setDrag] = useState(false);

		const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			isDraggable && setDrag(true);
		};

		const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			isDraggable && setDrag(false);
		};

		const dropLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
			e.preventDefault();

			if (!isDraggable) {
				return;
			}

			setDrag(false);

			const file = e.dataTransfer.files[0];
			onFileChange && onFileChange(file);
		};

		return (
			<div
				className={cn(styles.wrapper, className, { [styles.dropArea]: drag })}
				onDragStart={dragStartHandler}
				onDragLeave={dragLeaveHandler}
				onDragOver={dragStartHandler}
				onDrop={dropLeaveHandler}
			>
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
