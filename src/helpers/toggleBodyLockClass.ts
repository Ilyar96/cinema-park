export const toggleBodyLockClass = (action?: "add" | "remove") => {
	const body = document.body;
	const className = "lock";

	switch (action) {
		case "add":
			body.classList.add(className);
			break;
		case "remove":
			body.classList.remove(className);
			break;
		default:
			body.classList.toggle(className);
			break;
	}
};
