import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(req) {
  const jwtSecret = process.env.JWT_SECRET_KEY;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const data = await jose.jwtVerify(token, encodedJwtSecret);
    console.log({ data });
    return NextResponse.next();
  } catch (error) {
    console.log({ error });
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/",
};