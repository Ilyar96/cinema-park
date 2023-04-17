export interface RangeSliderProps {
	step?: number;
	min: number;
	max: number;
	colors?: [string, string, string, string];
	values: number[];
	fractionDigits?: number;
	title?: string;
	setValues: React.Dispatch<React.SetStateAction<number[]>>;
}
