import { NextResponse } from "next/server"
import { prisma } from "@/utils/prisma"

export const GET = async (req, { params }) => {
  try {
    const id = params.id
    const visitor = await prisma.visitor.findUnique({
      where: {
        id
      }
    })
    if (!visitor) {
      return NextResponse.json({ message: "visitor not found!" }, { status: 404 })
    }
    return NextResponse.json(visitor, { status: 200 })
  }
  catch (err) {
    return NextResponse.json({ message: "Error in getting the visitor", err }, { status: 500 })
  }
}

export const PUT = async (req, { params }) => {
  try {
    const id = params.id
    const { nama, kelas, keperluan } = await req.json()
    const updatedVisitor = await prisma.visitor.update({
      data: { nama, kelas, keperluan },
      where: { id }
    })
    return NextResponse.json(updatedVisitor, { status: 200 })
  }
  catch (err) {
    return NextResponse.json({ message: "Can not update the visitor", err }, { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  try {
    const id = params.id
    await prisma.visitor.delete({ where: { id } })
    return NextResponse.json({ message: "Visitor deleted successfully!" }, { status: 200 })

  }
  catch (err) {
    return NextResponse.json({ message: "Can not delete the visitor", err }, { status: 500 })
  }
}
