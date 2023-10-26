// import { NextResponse } from "next/server";
// import * as jose from "jose";

// export default async function middleware(req) {
//   const jwtSecret = process.env.JWT_SECRET_KEY;
//   const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
//   const token = req.cookies.get("token")?.value;
// const res = NextResponse.next()
//     // add the CORS headers to the response
//     res.headers.append('Access-Control-Allow-Credentials', process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS)
//     res.headers.append('Access-Control-Allow-Origin', process.env.ACCESS_CONTROL_ALLOW_ORIGIN) // replace this your actual origin
//     res.headers.append('Access-Control-Allow-Methods', process.env.ACCESS_CONTROL_ALLOW_METHODS)
//     res.headers.append('Access-Control-Allow-Headers', process.env.ACCESS_CONTROL_ALLOW_HEADERS)
  
//     if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   try {
//     const data = await jose.jwtVerify(token, encodedJwtSecret);
//     console.log({ data });
//     return res;
//   } catch (error) {
//     console.log({ error });
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }

// export const config = {
//   matcher: ["/"]
// };

import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/login'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};