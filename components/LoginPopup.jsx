import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginPopup() {
    return (
        <div
            className="absolute max-h-0 invisible opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:visible overflow-hidden right-0 top-full min-w-96 border border-black bg-white shadow z-10 duration-500 ease-in-out p-8
"
        >
            <LoginForm />
            <hr />
            <div className="text-center mt-4">
                Im new client.{" "}
                <Link href="/account" className="underline text-black text-sm hover:text-blue-600">
                    Create an account
                </Link>
            </div>
        </div>
    );
}

export default LoginPopup;
