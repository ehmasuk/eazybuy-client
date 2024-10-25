"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";
import SideCart from "./SideCart";

function MainLayout({ children }) {
    const pathname = usePathname();
    const isAdminRoute = pathname.startsWith("/admin");
    return (
        <div>
            {!isAdminRoute && <Header />}
            {children}
            {!isAdminRoute && <SideCart />}
            {!isAdminRoute && <Footer />}
        </div>
    );
}

export default MainLayout;
