import uploadToCloudinary from "@/helpers/uploadToCloudinary";
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
export const POST = async (req) => {
    const { name, image } = await req.json();

    if (!name || !image) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        const isExist = await prisma.categories.findUnique({ where: { name } });

        if (isExist) {
            return NextResponse.json({ message: "Category already exist" }, { status: 400 });
        }

        const uploadedImage = await uploadToCloudinary.uploader.upload(image, {
            folder: "eazybuy",
        });

        if (!uploadedImage) {
            return res.status(400).json({ message: "Cannot upload image to cloudinary" });
        }

        const slug = name.toLowerCase().replaceAll(" ", "-").trim();

        const category = await prisma.categories.create({ data: { name, image: uploadedImage.secure_url, slug } });

        if (!category) {
            return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
        }

        return NextResponse.json({ message: "Category created" }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
};
