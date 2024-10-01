import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

function ProductCard() {
    return (
        <div className="group mb-10">
            <div className="relative p-4 min-h-96 w-full overflow-hidden">
                <Image src="/51.jpg" alt="image" width={200} height={200} className="absolute left-0 top-0 w-full h-full object-cover" />
                {/* cart options */}
                <div className="absolute -bottom-[60px] opacity-0 duration-300 group-hover:bottom-4 group-hover:opacity-100 left-1/2 -translate-x-1/2 min-w-[90%]">
                    <div className="p-3 text-sm bg-white text-black flex flex-col items-center justify-center gap-3">
                        <p>Quick add to cart</p>
                        {/* sizes */}
                        <div className="flex items-center justify-center gap-2">
                            <div className="size-8 font-semibold border cursor-pointer border-slate-200 hover-effect uppercase flex items-center justify-center">xs</div>
                            <div className="size-8 font-semibold border cursor-pointer border-slate-200 hover-effect uppercase flex items-center justify-center">s</div>
                            <div className="size-8 font-semibold border cursor-pointer border-slate-200 hover-effect uppercase flex items-center justify-center">m</div>
                            <div className="size-8 font-semibold border cursor-pointer border-slate-200 hover-effect uppercase flex items-center justify-center">l</div>
                        </div>
                        {/* colors */}
                        <div className="flex items-center justify-center gap-2">
                            <div className="size-5 hover:ring-2 border-2 border-white rounded-full cursor-pointer bg-red-500"></div>
                            <div className="size-5 hover:ring-2 border-2 border-white rounded-full cursor-pointer bg-blue-500"></div>
                            <div className="size-5 hover:ring-2 border-2 border-white rounded-full cursor-pointer bg-pink-500"></div>
                            <div className="size-5 hover:ring-2 border-2 border-white rounded-full cursor-pointer bg-violet-500"></div>
                        </div>
                    </div>
                    <button className="flex items-center text-sm gap-2 w-full bg-black px-4 py-2 text-white hover-effect justify-center">
                        <IoCartOutline fontSize={18} />
                        Add to cart
                    </button>
                </div>

                {/* discount */}
                <p className="absolute top-2 left-2 text-xs text-white bg-blue-600 px-3 py-1">- 30%</p>
                {/* options */}
                <div className="absolute  -right-[60px] opacity-0 duration-300 group-hover:right-4 group-hover:opacity-100">
                    <div className="flex flex-col items-center gap-2 text-white">
                        <Tooltip placement="left" title="Add to wishlist">
                            <button className="size-10 bg-white text-black flex items-center justify-center hover-effect">
                                <CiHeart fontSize={20} />
                            </button>
                        </Tooltip>
                        <Tooltip placement="left" title="View product">
                            <button className="size-10 bg-white text-black flex items-center justify-center hover-effect">
                                <Link href="/">
                                    <GoEye fontSize={20} />
                                </Link>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <Link href="/">
                <p className="font-semibold mt-3 mb-2">Polo t-shirt</p>
            </Link>
            <div className="flex items-center gap-4">
                <p className="text-blue-600 font-semibold text-lg">$94</p>
                <del className="text-gray-600 text-sm font-semibold">$100</del>
            </div>
        </div>
    );
}

export default ProductCard;
