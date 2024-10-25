"use client";

import FormItem from "antd/es/form/FormItem";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Form, message } from "antd";

import { loginAction } from "@/actions/authActions";
import usePost from "@/hooks/usePost";
import { useState } from "react";

function RegisterForm() {

    const { postData,loading } = usePost();



    const handleSubmit = (values) => {
        postData(
            "/users/register",
            values,
            async (data) => {
                console.log(data);
                await loginAction({ email: values.email, password: values.password });
                window.location.reload();
                message.success("Registration successful 🥳");
            },
            (err) => {
                console.log(err);
                message.error(err.message);
            }
        );
    };

    return (
        <Form onFinish={handleSubmit}>
            <div className="flex flex-col text-black">
                <div>
                    <label htmlFor="#name" className="mb-2 text-lg inline-block">
                        Name
                    </label>
                    <FormItem name="name" rules={[{ required: true, message: "Please input your name" }]}>
                        <input type="text" id="name" className="w-full outline-none p-3 border border-black" />
                    </FormItem>
                </div>
                <div>
                    <label htmlFor="#email" className="mb-2 text-lg inline-block">
                        Email
                    </label>
                    <FormItem name="email" rules={[{ required: true, message: "Please input your email" }]}>
                        <input type="text" id="email" className="w-full outline-none p-3 border border-black" />
                    </FormItem>
                </div>
                <div>
                    <label htmlFor="#password" className="mb-2 text-lg inline-block">
                        Password
                    </label>
                    <FormItem name="password" rules={[{ required: true, message: "Please input your password" }]}>
                        <input type="password" id="password" className="w-full outline-none p-3 border border-black" />
                    </FormItem>
                </div>
                <button disabled={loading} type="submit" className="w-full flex items-center gap-2 justify-center bg-black text-white p-3 hover-effect uppercase">
                    Register
                    {loading && <AiOutlineLoading3Quarters color="white" className="animate-spin" fontSize={16} />}
                </button>
            </div>
        </Form>
    );
}

export default RegisterForm;
