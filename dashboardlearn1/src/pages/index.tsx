import { Button } from "@/components/ui/button";
import { ubuntuMono } from "@/types/font/Font";
import Head from "next/head";

export default function Home() {
	return (
		<main className={`min-h-screen ${ubuntuMono.className}`}>
			<Head>
				<title>Home | Dashboard</title>
				<meta name='description' content='Home | Dashboard' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className={``}>
				<h1 className='text-2xl text-center font-[600]'>
					Welcome to Dashboard
				</h1>
				<div className="flex justify-center">
					<Button>Click Me</Button>
				</div>
			</div>
		</main>
	);
}
