import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const categories = await prisma.categories.findMany({
            include: {
                subCategories: true,
            },
        });
        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};
export const POST = async (req) => {};
export const PUT = async (req) => {};
export const DELETE = async (req) => {};
