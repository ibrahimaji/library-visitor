import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { compare } from "bcrypt";

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (findUser) {
      const isPasswordMatches = await compare(password, findUser.password);
      if (isPasswordMatches)
        return NextResponse.json({ data: findUser }, { status: 200 });
      return NextResponse.json({ error: "Password salah!" }, { status: 401 });
    }
    return NextResponse.json({ data: findUser }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: err.status });
  }
}
