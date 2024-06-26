import { ubuntuMono } from "@/types/font/Font";
import Head from "next/head";

export default function Home() {
	return (
		<main className={`min-h-screen ${ubuntuMono.className}`}>
			<Head>
				<title>Home | Dashboard</title>
			</Head>
			<div className={``}>
				<h1 className='text-2xl text-center font-[600]'>
					Welcome to Dashboard
				</h1>
			</div>
		</main>
	);
}
