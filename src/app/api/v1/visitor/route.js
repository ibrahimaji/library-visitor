import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export const POST = async (req) => {
  try {
    const { nama, kelas, keperluan } = await req.json();
    const newVisitor = await prisma.visitor.create({
      data: {
        nama,
        kelas,
        keperluan,
      },
    });
    return NextResponse.json(newVisitor, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Terjadi masalah ketika membuat pengunjung", err },
      { status: 500 },
    );
  }
};

export const GET = async () => {
  try {
    const visitor = await prisma.visitor.findMany();
    return NextResponse.json(visitor, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Tidak dapat menemukan pengunjung", err },
      { status: 500 },
    );
  }
};
