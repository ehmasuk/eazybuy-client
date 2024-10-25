import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const users = await prisma.users.findMany();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error.message}, { status: 400 });
    }
    
    
};
