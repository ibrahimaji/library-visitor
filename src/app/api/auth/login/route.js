import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!findUser) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
    const matchPassword = await compare(password, findUser.password);
    if (!matchPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 },
      );
    }
    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };
    const accessToken = sign(payload, process.env.JWT_SECRET_KEY,{expiresIn:"10s"});
    const res = NextResponse.json(
      { accessToken, data: payload, message: "User login succesfully" }
    );
    res.cookies.set("token",accessToken);
    return res;
  } catch (err) {
    console.log(err);
    return NextResponse.json({err}, { status: err.status });
  }
}
