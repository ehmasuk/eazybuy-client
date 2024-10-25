

import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const colors = await prisma.colors.findMany()
        return NextResponse.json(colors, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};

export const POST = async (req) => {
    const { name, code } = await req.json();

    if (!name || !code) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        const isExist = await prisma.colors.findUnique({ where: { code } });

        if (isExist) {
            return NextResponse.json({ message: "Color already exist" }, { status: 400 });
        }

        const color = await prisma.colors.create({ data: { name, code } });

        if (!color) {
            return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
        }

        return NextResponse.json({ message: "Color created" }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
};
