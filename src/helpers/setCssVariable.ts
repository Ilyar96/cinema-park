export const setCssVariable = (property: string, value: string) => {
	document.documentElement.style.setProperty(property, value);
};
