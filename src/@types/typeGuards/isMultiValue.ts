import { MultiValue, SingleValue } from "react-select";

export const isMultiValue = (
	arg: MultiValue<T> | SingleValue<T>
): arg is MultiValue<T> => {
	return Array.isArray(arg);
};
