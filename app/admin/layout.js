"use client";

import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    {
        key: "/admin",
        label: <Link href="/admin">Dashboard</Link>,
    },
    {
        key: "/admin/courses",
        label: <Link href="/admin/products">Products</Link>,
        children: [
            {
                key: "/admin/products",
                label: <Link href="/admin/products">All products</Link>,
            },
            {
                key: "/admin/add-product",
                label: <Link href="/admin/add-product">Add product</Link>,
            },
        ],
    },
    {
        key: "e",
        label: 'Categories', 
        children: [
            {
                key: "/admin/categories",
                label: <Link href="/admin/categories">Categories</Link>,
            },
            {
                key: "/admin/sub-categories",
                label: <Link href="/admin/sub-categories">Sub categories</Link>,
            },
        ],
    },
    {
        key: "/admin/tasks",
        label: <Link href="/admin/tasks">Tasks</Link>,
    },
];

function Layout({ children }) {
    const pathName = usePathname();

    return (
        <div>
            <div className="flex">
                <Menu
                    style={{
                        minHeight: "100vh",
                        width: "250px",
                    }}
                    defaultSelectedKeys={pathName}
                    mode="inline"
                    theme="dark"
                    items={items}
                />
                <div className="w-full">
                    <div className="p-10 bg-slate-100 h-full">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
