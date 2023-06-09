import { FILE_SIZE, SUPPORTED_FORMATS } from "@/components/constants";

export const sizeValidate = (file: File | undefined) => {
	if (file) {
		return file.size <= FILE_SIZE;
	}

	return true;
};

export const formatValidate = (file: File | undefined) => {
	if (file) {
		return SUPPORTED_FORMATS.includes(file.type);
	}

	return true;
};

export const spaceValidate = (value: string | undefined) => {
	if (value) {
		return !value.includes(" ");
	}
	return false;
};
