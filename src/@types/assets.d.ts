declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare module "*.png" {
	// @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module "*.css" {
	// @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}
