import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request) {
    const session = await auth();

    const path = request.nextUrl.pathname;

    if (path === "/profile" && !session) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/", "/profile"],
};
