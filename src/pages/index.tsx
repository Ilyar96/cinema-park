import { withLayout } from "@/hok";
import { HomePage } from "@/page-components";


const Home = () => {
	return (
		<>
			<HomePage />
		</>
	);
};

export default withLayout(Home);