import { SVGProps } from "react";

export interface FillingCircleProps extends SVGProps<SVGSVGElement> {
	size: number;
	uploadingProgress: number;
	transitionDuration?: string;
	value?: string;
}
