import { google } from "@/utils/arctic";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code") as string;
  const codeFromCookies = cookies().get("code")?.value as string;

  const tokens = await google.validateAuthorizationCode(code, codeFromCookies);

  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });
  const user = await res.json();
  console.log(user);

  /* --- after getting user data ---  */

  // 1. find user in DB by email
  // 2. if email exist => create JWT Token for login
  // 3. if email doesn't exist => register
  // 4. create user to db
  // 5. create JWT token for login

  const payload = {
    id: "id123",
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!);
  cookies().set("token", token, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/dashboard");
}
