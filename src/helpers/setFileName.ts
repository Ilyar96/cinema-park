export const setFileName = (file: File, charLength = 18) => {
	if (!file) return "";

	const filename = file.name;
	const extDotIndex = filename.lastIndexOf(".");
	const ext = filename.slice(extDotIndex);
	const filenameWithoutExt = filename.slice(0, extDotIndex);
	const shortFilename = filenameWithoutExt.slice(0, charLength);

	if (filenameWithoutExt <= shortFilename) {
		return filename;
	}

	return `${shortFilename}..${ext}`;
};
