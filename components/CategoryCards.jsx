import Image from "next/image";
import Link from "next/link";

function CategoryCards() {
    const data = [
        {
            name: "Mobiles",
            image: "https://m.media-amazon.com/images/I/71CxUvG46rL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            name: "Smartwatchs",
            image: "https://m.media-amazon.com/images/I/711f6KLsMaL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            name: "Refrigerators",
            image: "https://m.media-amazon.com/images/I/61iovK065sL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            name: "Laptops",
            image: "https://m.media-amazon.com/images/I/61uX-zajiXL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            name: "Cameras",
            image: "https://m.media-amazon.com/images/I/81C9A0E+8TL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            name: "Headphones",
            image: "https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            name: "Speakers",
            image: "https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_UY327_FMwebp_QL65_.jpg",
        },
    ];
    return (
        <>
            {data?.map((category, index) => {
                return (
                    <div key={index}>
                        <div className="p-3 items-center flex flex-col justify-center w-full h-full gap-3 group">
                            <Link href="/">
                                <div className="flex items-center justify-center bg-[#F4F4F4] rounded-full size-36 ">
                                    <Image height={200} width={200} src={category.image} alt="image" className="size-20 rounded object-contain group-hover:scale-110 duration-300" />
                                </div>
                            </Link>
                            <Link href="/shop" className="font-bold text-lg hover:text-blue-600">
                                {category.name}
                            </Link>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CategoryCards;
