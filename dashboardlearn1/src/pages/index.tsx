import { ubuntu } from "@/font/Font";

export default function Home() {
	return (
		<main
			className={`min-h-screen ${ubuntu.className}`}
		>
			{/* <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'> */}
			<div className='font-mono'>
				<h1 className='text-center text-2xl'>Welcome to the dashboard</h1>
			</div>
		</main>
	);
}
