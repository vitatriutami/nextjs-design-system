"use client";

import { Button } from "@/components/button";

export default async function Home() {
  return (
    <div>
      <Button onClick={() => console.log("Hello")}>Hello!</Button>
    </div>
  );
}
