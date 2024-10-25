import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

function AccountPage() {
    return (
        <div className="container py-10">
            <p className="text-3xl font-bold mb-10">Account</p>
            <div className="grid grid-cols-2 gap-10">
                <div className="max-w-md">
                    <p className="text-2xl mb-5">Login</p>
                    <LoginForm />
                </div>
                <div className="max-w-md">
                    <p className="text-2xl mb-5">Register</p>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
