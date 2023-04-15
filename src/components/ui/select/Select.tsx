import React from "react";
import {
	default as ReactSelect,
} from "react-select";
import cn from "classnames";
import scssStyles from "./Select.module.scss";
import { ISelectProps } from "./Select.type";

export const Select: React.FC<ISelectProps> = ({
	className,
	DropdownIndicator,
	isMulti = false,
	MultiValueRemove,
	options,
	styles,
	value,
	onBlur,
	onChange,
	onFocus,
}) => {
	return (
		<ReactSelect
			className={cn(scssStyles.select, className)}
			components={{
				DropdownIndicator: DropdownIndicator,
				MultiValueRemove: MultiValueRemove,
			}}
			isMulti={isMulti}
			options={options}
			styles={styles}
			value={value}
			onBlur={onBlur}
			onChange={onChange}
			onFocus={onFocus}
		/>
	);
};