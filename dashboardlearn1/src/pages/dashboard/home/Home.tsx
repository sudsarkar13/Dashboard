import React from 'react';
import { ubuntu } from "@/types/font/Font";
import Head from "next/head";
import { Inventory } from "@/components/dashboard";

const Home: React.FC = () => {
  return (
    <main className={`min-h-screen ${ubuntu.className}`}>
			<Head>
				<title>Home | Dashboard</title>
				<meta name='description' content='Home | Dashboard' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div>
				<Inventory />
			</div>
		</main>
  );
};

export default Home;
