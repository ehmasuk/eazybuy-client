"use client";

import { loginAction } from "@/actions/authActions";
import { Form, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoginPopup() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            await loginAction(values);
            window.location.reload();
            message.success("Login successfully");
        } catch (error) {
            message.error("Authentication failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="absolute max-h-0 invisible opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:visible overflow-hidden right-0 top-full min-w-96 border border-black bg-white shadow z-10 duration-500 ease-in-out
"
        >
            <Form onFinish={handleSubmit}>
                <div className="flex flex-col p-8 text-black">
                    <div>
                        <label htmlFor="#username" className="mb-2 text-lg inline-block">
                            Username or email
                        </label>
                        <FormItem name="username" rules={[{ required: true, message: "Please input your username or email" }]}>
                            <input type="text" id="username" className="w-full outline-none p-3 border border-black" />
                        </FormItem>
                    </div>
                    <div>
                        <label htmlFor="#password" className="mb-2 text-lg inline-block">
                            Password
                        </label>
                        <FormItem name="password" rules={[{ required: true, message: "Please input your password" }]}>
                            <input type="text" id="password" className="w-full outline-none p-3 border border-black" />
                        </FormItem>
                    </div>
                    <button disabled={loading} type="submit" className="w-full flex items-center gap-2 justify-center bg-black text-white p-3 hover-effect uppercase">
                        Login
                        {loading && <AiOutlineLoading3Quarters color="white" className="animate-spin" fontSize={16} />}
                    </button>

                    <Link href="/" className="underline my-4 text-black text-sm hover:text-blue-600">
                        I forgot my password
                    </Link>
                    <hr />
                    <div className="text-center mt-4">
                        Im new client.{" "}
                        <Link href="/" className="underline text-black text-sm hover:text-blue-600">
                            Create an account
                        </Link>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default LoginPopup;
