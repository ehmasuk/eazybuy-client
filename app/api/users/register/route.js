import prisma from "@/prisma/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        const isExist = await prisma.users.findUnique({ where: { email } });

        if (isExist) {
            return NextResponse.json({ message: "Email already exist" }, { status: 400 });
        }

        const encriptPassword = bcrypt.hashSync(password, 10);

        const user = await prisma.users.create({ data: { name, email, password: encriptPassword } });

        if (!user) {
            return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
        }

        return NextResponse.json({ message: "User created" }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
};
