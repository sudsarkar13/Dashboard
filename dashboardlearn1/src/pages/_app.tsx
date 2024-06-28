import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/dashboard/Layout";
import AuthLayout from "@/components/auth/AuthLayout";

export default function App({ Component, pageProps, router }: AppProps) {
	const isAuthRoute = router.pathname.startsWith("/auth");
	return isAuthRoute ? (
		<AuthLayout>
			<Component {...pageProps} />
		</AuthLayout>
	) : (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
