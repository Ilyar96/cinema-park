import React, { FC } from "react";
import { Range } from "react-range";
import { getTrackBackground } from "react-range/lib/utils";
import { RangeSliderProps } from "./RangeSlider.type";
import styles from "./RangeSlider.module.scss";

export const RangeSlider: FC<RangeSliderProps> = ({
	colors = ["#ebebeb", "#79c142", "#ebebeb", "#ebebeb"],
	step = 1,
	min,
	max,
	values,
	fractionDigits = 0,
	setValues,
	title
}) => {

	return (
		<div className={styles.wrapper} >
			<Range
				values={values}
				step={step}
				min={min}
				max={max}
				onChange={(values) => setValues(values)}
				renderTrack={({ props, children }) => (
					<div
						className={styles.rangeSlider}
						onMouseDown={props.onMouseDown}
						onTouchStart={props.onTouchStart}
					>
						<div
							className={styles.track}
							ref={props.ref}
							style={{
								background: getTrackBackground({
									values,
									colors: colors,
									min: min,
									max: max,
								}),
							}}
						>
							{children}
						</div>
					</div>
				)}
				renderThumb={({ props }) => (
					<div
						className={styles.thumb}
						{...props}
					/>
				)}
			/>
			<output className={styles.output}>
				{title ? title + ": " : ""}
				{values.map((value, i) => {
					return `${i !== 0 ? " - " : ""}${value.toFixed(fractionDigits)}`;
				})}
			</output>
		</div>
	);
};
