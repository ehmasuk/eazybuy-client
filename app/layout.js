import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

import AuthProvider from "@/components/AuthProvider";
import MainLayout from "@/components/MainLayout";
import StoreProvider from "@/redux/StoreProvider";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const metadata = {
    title: "EazyBuy",
    description: "Buy easy and fast",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <AuthProvider>
                <StoreProvider>
                    <AntdRegistry>
                        <body className={plus_jakarta_sans.className}>
                            <MainLayout>{children}</MainLayout>
                        </body>
                    </AntdRegistry>
                </StoreProvider>
            </AuthProvider>
        </html>
    );
}
