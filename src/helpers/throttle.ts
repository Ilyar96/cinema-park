export const throttle = (func: Function, delay: number) => {
	let inProgress = false;
	return (...args: any[]) => {
		if (inProgress) {
			return;
		}
		inProgress = true;
		setTimeout(() => {
			func(...args);
			inProgress = false;
		}, delay);
	};
};
