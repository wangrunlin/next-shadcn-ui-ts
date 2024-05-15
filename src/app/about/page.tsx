"use client";

import { TypographyH1, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main className="text-center">
      <TypographyH1>About</TypographyH1>
      <footer>
        <TypographyP className="mb-8">about content</TypographyP>

        <Button asChild>
          <Link href="https://github.com/wangrunlin">GitHub</Link>
        </Button>

        <Button variant="link" className="mt-8" size="lg" asChild>
          <Link href="https://wangrunlin.com">Homepage</Link>
        </Button>
      </footer>
    </main>
  );
}
