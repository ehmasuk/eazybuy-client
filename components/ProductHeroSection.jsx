"use client";
import { FaRegHeart } from "react-icons/fa6";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { Image, InputNumber, Rate } from "antd";
import Link from "next/link";

function ProductHeroSection({ product }) {
    return (
        <div className="grid grid-cols-12 gap-10">
            <div className="col-span-5">
                <Image.PreviewGroup>
                    <div className="grid grid-cols-[120px_auto] gap-5">
                        <div className="flex flex-col gap-3">
                            {product?.gallery?.map((image, index) => {
                                return <Image key={index} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src={image} alt="image" className="border border-blue-100" />;
                            })}
                        </div>
                        <div>
                            <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="border p-3 border-blue-100" src={product?.image} alt="image" />
                        </div>
                    </div>
                </Image.PreviewGroup>
            </div>
            <div className="col-span-7">
                <Link href="/" className="hover:text-blue-600 duration-300">
                    {product?.category?.name}
                </Link>
                <p className="text-3xl my-3">{product?.title}</p>
                <div className="flex items-baseline gap-3">
                    <p className="text-orange-500 font-bold">4.5</p>
                    <Rate disabled defaultValue={4} className="[&_*]:text-sm" />
                    <Link href="/" className="text-sm text-gray-500 hover:text-black">
                        (45 reviews)
                    </Link>
                </div>
                <div className="lg:my-8 my-4">
                    <div className="grid gap-2">
                        <div className="grid grid-cols-[120px_auto] gap-2 text-sm">
                            <p>Brands</p>
                            <b>Chow Tai Fook</b>
                        </div>
                        <div className="grid grid-cols-[120px_auto] gap-2 text-sm">
                            <p>Product code</p>
                            <b>0006</b>
                        </div>
                        <div className="grid grid-cols-[120px_auto] gap-2 text-sm">
                            <p>Availability</p>
                            <b>In Stock</b>
                        </div>
                    </div>
                </div>
                {/* price */}
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-3xl ">${product?.newPrice}</p>
                    <del className="text-lg text-red-500">
                        {product?.oldPrice && "$"}
                        {product?.oldPrice}
                    </del>
                </div>
                {/* buttons */}
                <div className="lg:mt-8 mt-4 py-8 border-t border-b border-gray-200">
                    <div className="grid grid-cols-2 gap-5 items-end">
                        <button className="bg-black text-white p-3 w-full hover-effect uppercase">Add to cart</button>

                        <div className="">
                            <p className="mb-2">Quantity</p>
                            <InputNumber size="large" min={1} max={10} defaultValue={3} />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 lg:gap-10">
                        <button className="flex items-center hover:text-blue-600 gap-2 mt-5">
                            <FaRegHeart fontSize={18} />
                            Add to wishlist
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-600 mt-5">
                            <IoChatboxEllipsesOutline fontSize={18} />
                            Ask about product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductHeroSection;
