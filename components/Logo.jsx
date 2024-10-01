import { CiShop } from "react-icons/ci";


import Link from "next/link";

function Logo() {
    return (
        <Link href="/" className="text-2xl flex items-center gap-1 font-bold text-black">
            <CiShop fontSize={25} />
            EazyBuy
        </Link>
    );
}

export default Logo;
