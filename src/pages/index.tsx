import Link from 'next/link';
import { withLayout } from "@/layout/Layout";


const Home = () => {
	return (
		<>
			<Link href="/">Главная</Link>
			<Link href="/test">Test</Link>
			<h1>Home</h1>
		</>
	);
};

export default withLayout(Home);