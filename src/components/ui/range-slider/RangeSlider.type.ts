export interface RangeSliderProps {
	step?: number;
	min: number;
	max: number;
	colors?: [string, string, string, string];
	values: number[];
	fractionDigits?: number;
	setValues: React.Dispatch<React.SetStateAction<number[]>>;
}
