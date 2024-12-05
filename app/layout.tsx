import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Acutely",
  description: "Sharp Tools for Critical Decisions",
  icons: [
    {
      rel: 'icon',
      media: '(prefers-color-scheme: light)',
      url: '/Acutely-Logo.png',
      href: '/Acutely-Logo.png',
    },
    {
      rel: 'icon',
      media: '(prefers-color-scheme: dark)',
      url: '/Acutely-Dark.svg',
      href: '/Acutely-Dark.svg',
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#1F1F1F]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="acutely-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}