import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const sizes = await prisma.sizes.findMany();
        return NextResponse.json(sizes, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};

export const POST = async (req) => {
    const { name } = await req.json();

    if (!name) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        const isExist = await prisma.sizes.findUnique({ where: { name } });

        if (isExist) {
            return NextResponse.json({ message: "Size already exist" }, { status: 400 });
        }

        const slug = name.toLowerCase().replaceAll(" ", "-").trim();

        const size = await prisma.sizes.create({ data: { name, slug } });

        if (!size) {
            return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
        }

        return NextResponse.json({ message: "Size created" }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
};
