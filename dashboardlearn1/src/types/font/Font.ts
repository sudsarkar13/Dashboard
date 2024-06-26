import { Ubuntu, Ubuntu_Mono, Ubuntu_Condensed } from "next/font/google";

export const ubuntu = Ubuntu({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"],
  style: ["normal"],
  weight: ["300", "400", "500", "700"],
});

export const ubuntuMono = Ubuntu_Mono({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"],
  style: ["normal"],
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
});

export const ubuntuCondensed = Ubuntu_Condensed({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"],
  style: ["normal"],
  weight: ["400"],
});