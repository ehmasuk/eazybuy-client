import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    const users = await prisma.users.findMany();
    return NextResponse.json(users, { status: 200 });
};
