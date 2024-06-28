import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/dashboard/Layout";
import AuthLayout from "@/components/auth/AuthLayout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  const isAuthRoute = router.pathname.startsWith("/auth");

  return (
    <QueryClientProvider client={queryClient}>
      {isAuthRoute ? (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </QueryClientProvider>
  );
}