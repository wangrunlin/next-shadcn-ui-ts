import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Providers } from "@/components/providers";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Next.js shadcn/ui scaffold",
  description: "Generated by Leo Wang <https://wangrunlin.com>",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="top-0 flex justify-between items-center pt-8 px-8 lg:px-48 border-collapse">
            <nav className="space-x-8">
              <Button variant="link" asChild>
                <Link href="/">Leo Wang</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/jotai">Jotai</Link>
              </Button>
            </nav>
            <ModeToggle />
          </header>

          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
