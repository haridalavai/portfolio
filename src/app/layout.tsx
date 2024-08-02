import type { Metadata } from "next";
import { Inter, Poppins, Press_Start_2P, VT323 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/cursor";
import { Analytics } from "@vercel/analytics/react";

const p2p = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: ["400"],
  subsets: ["latin"],
});
const retro = localFont({ src: "./retro-font.ttf" });

export const metadata: Metadata = {
  title: "haridalavai",
  description: "Portfolio of Hari Dalavai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={retro.className}>
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
