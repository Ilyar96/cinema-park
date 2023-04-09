import { SVGProps } from "react";

export interface FileLoaderProps extends SVGProps<SVGSVGElement> {
	size: number;
	uploadingProgress: number;
}
