"use client";

import { Button } from "@/components/ui/button";

const clickHandler = () => {
  alert("clicked");
};

export default function About() {
  return (
    <>
      <h1>About</h1>
      <footer>
        <p>about content</p>

        <Button variant="outline" size="lg" onClick={clickHandler}>
          Click Me
        </Button>
      </footer>
    </>
  );
}
