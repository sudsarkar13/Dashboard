import { Html, Head, Main, NextScript } from "next/document";
import { ubuntuMono as fontSans } from "@/types/font/Font";
import { cn } from "@/lib/utils";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
