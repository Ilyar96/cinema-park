import Head from 'next/head';
import { Test } from "@/components/Test";
import Link from 'next/link';


export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Link href="/">Главная</Link>
			<Link href="/test">Test</Link>
			<Test />
		</>
	);
}
