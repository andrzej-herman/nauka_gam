import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nauka gam",
  description: "Aplikacja do nauki gam",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/music_light.png",
        href: "/music_light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/music_dark.png",
        href: "/music_dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="notatkihermana-theme"
      >
        <div className="h-full dark:bg-[#1F1F1F] flex flex-col">
          <div className="flex-1">
            <Navbar />
            <main className="pt-32 pb-20 dark:bg-[#1F1F1F]">{children}</main>
          </div>
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
