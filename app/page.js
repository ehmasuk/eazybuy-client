import CategoryCards from "@/components/CategoryCards";
import HeroSlider from "@/components/HeroSlider";
import NewsLatter from "@/components/NewsLatter";
import ProductCards from "@/components/ProductCards";
import { fetchData } from "@/hooks/fetchData";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { PiDress } from "react-icons/pi";

async function HomePage() {

    const allProducts = await fetchData("/products");

    return (
        <>
            <div className="container py-5">
                {/* hero section */}

                <div className="grid grid-cols-12 gap-8">
                    {/* sidebar */}
                    <div className="col-span-3 border border-gray-200 h-fit">
                        <div className="row gap-2 p-4 bg-blue-600 text-white font-bold text-sm">
                            <FaBars fontSize={16} />
                            SHOP BY CATEGORY
                        </div>
                        <div className="divide-gray-200 divide-y-[1px]">
                            {Array(7)
                                .fill(0)
                                .map((_, index) => {
                                    return (
                                        <div key={index} className="flex gap-2 items-center p-4 bg-white text-slate-800 font-bold text-sm">
                                            <PiDress fontSize={20} />
                                            FASHION
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    {/* carousel */}
                    <div className="col-span-9">
                        <HeroSlider />
                    </div>
                </div>

                {/* man women section */}
                <div className="grid lg:grid-cols-2 gap-10 py-10">
                    <div className="overflow-hidden">
                        <div
                            className="p-20 flex flex-col gap-6 justify-end relative min-h-80 men-women-section-single-item"
                            style={{ backgroundImage: "linear-gradient(#00000073, #00000073),url('/man.jpg')" }}
                        >
                            <p className="text-5xl font-bold text-white">Men</p>
                            <Link href="#" className="bg-white text-black text-lg font-bold text-center max-w-fit px-4 py-2 hover-effect duration-30">
                                Shop now
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div
                            className="p-20 flex flex-col gap-6 justify-end relative min-h-80 men-women-section-single-item"
                            style={{ backgroundImage: "linear-gradient(#00000073, #00000073),url('/women.jpg')" }}
                        >
                            <p className="text-5xl font-bold text-white">Women</p>
                            <Link href="#" className="bg-white text-black text-lg font-bold text-center max-w-fit px-4 py-2 hover-effect duration-30">
                                Shop now
                            </Link>
                        </div>
                    </div>
                </div>

                {/*  categories section */}
                <div className="mb-10">
                    <p className="text-3xl mb-4 font-semibold">Shop by categories</p>
                    <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 gap-4">
                        <CategoryCards />
                    </div>
                </div>

                {/* new arival section */}
                <div className="mb-10">
                    <p className="text-3xl mb-4 font-semibold">New arivals</p>
                    <div className="grid grid-cols-5 gap-4">
                        <ProductCards data={allProducts} />
                    </div>
                </div>

                {/* recoomanded for you */}
                <div className="mb-10">
                    <p className="text-3xl mb-4 font-semibold">Recommended for you</p>
                    <div className="grid grid-cols-5 gap-4">
                        <ProductCards data={[1]} />
                    </div>
                </div>
            </div>
            <NewsLatter />
        </>
    );
}

export default HomePage;
