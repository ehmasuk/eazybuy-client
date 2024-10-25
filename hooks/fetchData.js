"use server";

import { revalidatePath } from "next/cache";

export const revalidate = (url) => {
    revalidatePath(url);
};

export const fetchData = async (url) => {
    if (!process.env.NEXT_PUBLIC_API_URL) return [];
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url, { next: { revalidate: 30 * 60 * 1000 } });
    if (!res.ok) {
        throw new Error("Error fetching from " + url);
    }
    return await res.json();
};


