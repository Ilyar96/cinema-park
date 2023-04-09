import React, { FC, memo } from 'react';
import { FileLoaderProps } from "./FileLoader.type";

const getCircleStrokeDashoffsetValueByPercent = (radius: number, percent = 0) => {
	const strokeDashoffset = 2 * 3.14 * radius;
	return strokeDashoffset - (strokeDashoffset * percent) / 100;
};

export const FileLoader: FC<FileLoaderProps> = memo(({ size, uploadingProgress, ...props }) => {
	const radius = size / 2 - 3;

	return (
		<svg
			width={radius * 2 + 3}
			height={radius * 2 + 3}
			{...props}
		>
			<circle
				r={radius}
				cx="50%"
				cy="50%"
				fill="transparent"
				stroke="currentColor"
				strokeWidth={3}
				opacity={0.4}
			/>
			<circle
				r={radius}
				cx="50%"
				cy="50%"
				fill="transparent"
				stroke="currentColor"
				strokeWidth={3}
				style={{
					strokeDasharray: `${2 * 3.14 * radius}px`,
					strokeDashoffset: `${getCircleStrokeDashoffsetValueByPercent(radius, uploadingProgress)}px`,
				}}
			/>
		</svg>
	);
});

