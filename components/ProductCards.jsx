import { Rate, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

function ProductCards({ data }) {
    return (
        <>
            {data?.map((product, index) => {
                return (
                    <div key={index} className="group mb-10">
                        <div className="relative p-4 min-h-96 w-full overflow-hidden">
                            <Link href={`/product/${product.slug}`}>
                                <Image
                                    src={product.image}
                                    alt="image"
                                    fill
                                    sizes="(min-width: 1340px) 243px, calc(19.8vw - 18px)"
                                    className="absolute left-0 top-0 w-full h-full object-contain border border-blue-100"
                                />
                            </Link>
                            {/* cart options */}
                            <div className="absolute -bottom-[60px] opacity-0 duration-300 group-hover:bottom-4 group-hover:opacity-100 left-1/2 -translate-x-1/2 min-w-[90%]">
                                <div className="p-3 text-sm bg-white text-black flex flex-col items-center justify-center gap-3">
                                    {product.sizes || product.colors ? <p>Quick add to cart</p> : null}

                                    {/* sizes */}
                                    <div className="flex items-center justify-center gap-2">
                                        {product?.sizes?.map((size, index) => {
                                            return (
                                                <div key={index} className="size-8 font-semibold border cursor-pointer border-slate-200 hover-effect uppercase flex items-center justify-center">
                                                    {size.name}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* colors */}
                                    <div className="flex items-center justify-center gap-2">
                                        {product?.colors?.map((color, index) => {
                                            return <div key={index} className="size-5 hover:ring-2 border-2 border-white rounded-full cursor-pointer" style={{ backgroundColor: color.code }}></div>;
                                        })}
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
                        <Link href={`/product/${product.slug}`}>
                            <p className="font-semibold mt-3 line-clamp-2">{product.title}</p>
                        </Link>
                        <div className="flex items-center gap-1">
                            <p>4.5</p>
                            <Rate disabled defaultValue={4} className="[&_*]:text-sm" />
                            <p>45 reviews</p>
                        </div>
                        <div className="flex items-center gap-4 mt-1">
                            <p className="text-blue-600 font-semibold text-lg">${product.newPrice}</p>
                            <del className="text-gray-600 text-sm font-semibold">
                                {product?.oldPrice && "$"}
                                {product?.oldPrice}
                            </del>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ProductCards;
