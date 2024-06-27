"use client";

import { Button } from "@/components/button";
// import { Input } from "@/components/input";

export default async function Home() {
  return (
    <div>
      {/* <Input /> */}
      <Button onClick={() => console.log("Hello")}>Hello!</Button>
    </div>
  );
}
