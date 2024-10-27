import ProductHeroSection from "@/components/ProductHeroSection";
import { fetchData } from "@/hooks/fetchData";
import { redirect } from "next/navigation";
async function ProductDetails({ params }) {
    const product = await fetchData(`/singleproduct?slug=${params.slug}`);

    if (!product) return redirect("/404");

    return (
        <div className="max-w-7xl px-4 py-10 mx-auto">
            <ProductHeroSection product={product} />
            <div className="py-10">
                <p className="text-3xl my-3">Product description</p>
                <div className="leading-loose tracking-wide">{product?.description}</div>
            </div>
            <div className="py-5">
                <p className="text-3xl my-3">Customer reviews</p>
                <div className="leading-loose tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed
                    do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
