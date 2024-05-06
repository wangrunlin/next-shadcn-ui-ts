"use client";

import { TypographyH1, TypographyP } from "@/components/typography";
import { Button } from "@/components/ui/button";

const clickHandler = () => {
  alert("clicked");
};

export default function About() {
  return (
    <main className="text-center p-32">
      <TypographyH1>About</TypographyH1>
      <footer>
        <TypographyP>about content</TypographyP>

        <Button variant="outline" size="lg" onClick={clickHandler}>
          Click Me
        </Button>
      </footer>
    </main>
  );
}
