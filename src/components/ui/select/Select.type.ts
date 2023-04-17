import { FocusEventHandler } from "react";
import {
	ActionMeta,
	DropdownIndicatorProps,
	GroupBase,
	MultiValue,
	MultiValueRemoveProps,
	OnChangeValue,
	SingleValue,
	StylesConfig,
} from "react-select";

export interface ISelectOption {
	value: string;
	label: string;
}

export type isMultiType = true | false;
export type DropdownIndicatorType = React.ComponentType<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	DropdownIndicatorProps<any, any, GroupBase<any>>
>;
export type MultiValueRemoveType = React.ComponentType<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	MultiValueRemoveProps<any, isMultiType, GroupBase<any>>
>;

export interface ISelectProps {
	className?: string;
	DropdownIndicator?: DropdownIndicatorType;
	isMulti?: isMultiType;
	MultiValueRemove?: MultiValueRemoveType;
	options: ISelectOption[];
	styles?: StylesConfig<ISelectOption, isMultiType, GroupBase<ISelectOption>>;
	value: SingleValue<ISelectOption> | MultiValue<ISelectOption>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onChange?: (
		value: OnChangeValue<ISelectOption, isMultiType>,
		action: ActionMeta<ISelectOption>
	) => void;
	onFocus?: FocusEventHandler<HTMLInputElement>;
	name?: string;
	placeholder?: string;
}
