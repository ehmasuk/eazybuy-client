"use server";

import { signIn, signOut } from "@/auth";

export const loginAction = async (data) => {
    await signIn("credentials", data);
};
export const logoutAction = async () => {
    await signOut();
};
