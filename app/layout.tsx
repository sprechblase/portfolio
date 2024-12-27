import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "skre/dev — Portfolio",
    template: "%s — skre/dev",
  },
  description: "My personal site to showcase my developement work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={cn(
          "mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased",
          inter.variable,
          calistoga.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="hidden xl:block fixed left-[15%] top-0 w-px h-full bg-white/10" />
          <div className="hidden xl:block fixed right-[15%] top-0 w-px h-full bg-white/10" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
