import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='main-layout'>
			<div>{children}</div>
		</main>
	);
}
