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
	...props
}) => {
	return (
		<ReactSelect
			className={cn(scssStyles.select, className)}
			classNamePrefix="react-select"
			components={{
				DropdownIndicator: DropdownIndicator,
				MultiValueRemove: MultiValueRemove,
			}}
			isMulti={isMulti}
			options={options}
			{...props}
		/>
	);
};