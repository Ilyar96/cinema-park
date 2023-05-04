import { getType } from "@/helpers";

export const isFile = (payload: any): payload is File => {
	return getType(payload) === "File";
};
