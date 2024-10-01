import { logoutAction } from "@/actions/authActions";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { IoShirtOutline } from "react-icons/io5";

function ProfileDropdown() {
    const handleLogout = async () => {
        await logoutAction();
        window.location.reload();
    };

    return (
        <div
            className="absolute max-h-0 invisible opacity-0 group-hover:max-h-fit group-hover:opacity-100 group-hover:visible overflow-hidden right-0 top-full bg-white shadow z-10 duration-500 ease-in-out border border-gray-200
"
        >
            <div className="flex flex-col text-black">
                <Link href="/profile" className="p-3 hover:bg-blue-100 gap-2 duration-300 flex items-center justify-center min-w-36">
                    <AiOutlineUser fontSize={18} />
                    Profile
                </Link>
                <Link href="/profile" className="p-3 hover:bg-blue-100 gap-2 duration-300 flex items-center justify-center min-w-36">
                    <IoShirtOutline fontSize={18} />
                    Orders
                </Link>
                <Link onClick={handleLogout} href="#" className="p-3 hover:bg-blue-100 gap-2 duration-300 flex items-center justify-center min-w-36">
                    <IoIosLogOut fontSize={18} />
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default ProfileDropdown;
