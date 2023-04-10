import { Layout } from "../layout/Layout";

export const withLayout = <T extends Record<string, unknown>>(
	Component: React.FC<T>
) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
