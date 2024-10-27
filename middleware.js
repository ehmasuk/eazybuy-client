import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request) {
    const session = await auth();

    const path = request.nextUrl.pathname;

    const isAdmin = session?.user?.isAdmin;


    if (path === "/profile" && !session) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (path === "/account" && session) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (path.startsWith("/admin") && !isAdmin) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/", "/profile", "/account","/admin/:path*"],
};
