import { google } from "@/utils/arctic";
import { Button } from "@/components/button";
import { generateCodeVerifier, generateState } from "arctic";
import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function page() {
  async function handleLoginWithGoogle() {
    "use server";

    // generate state
    const state = generateState();
    const code = generateCodeVerifier(); // save to cookie

    cookies().set("code", code) // cookies bisa dari express

    const url = await google.createAuthorizationURL(state, code, {
      scopes: ["email", "profile"],
    });

    redirect(url.href);
  }

  return (
    <div>
      <form action={handleLoginWithGoogle}>
        <Button>Continue with Google</Button>
      </form>
    </div>
  );
}
