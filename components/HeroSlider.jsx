"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function HeroSlider() {
    const heroSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <Slider {...heroSliderSettings}>
            <div>
                <div className="flex flex-col justify-center p-10 bg-cover bg-left-top bg-no-repeat min-h-[60vh]" style={{ backgroundImage: "url('/shop2_home_slider1.jpg')" }}>
                    <p className="uppercase text-gray-800">Summer sale</p>
                    <p className="uppercase text-black font-extrabold text-6xl mt-2 mb-8">30% off</p>
                    <div className="flex gap-8">
                        <div className="flex items-start">
                            <p className="uppercase text-black font-extrabold mr-2">Startting at</p>
                            <p className="uppercase text-black font-extrabold text-3xl">$199</p>
                        </div>
                        <button className="bg-black text-white px-6 py-3 hover:bg-slate-800 uppercase font-bold">Get yours!</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center p-10 bg-cover bg-left-top bg-no-repeat min-h-[60vh]" style={{ background: "url('/shop2_home_slider2.jpg')" }}>
                    <p className="uppercase text-gray-800">over 200 products in discount</p>
                    <p className="uppercase text-black font-extrabold text-6xl mt-2 mb-8">great deals</p>
                    <div className="flex gap-8">
                        <div className="flex items-start">
                            <p className="uppercase text-black font-extrabold mr-2">Startting at</p>
                            <p className="uppercase text-black font-extrabold text-3xl">$299</p>
                        </div>
                        <button className="bg-black text-white px-6 py-3 hover:bg-slate-800 uppercase font-bold">Get yours!</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center p-10 bg-cover bg-left-top bg-no-repeat min-h-[60vh]" style={{ background: "url('/shop2_home_slider3.jpg')" }}>
                    <p className="uppercase text-gray-800">over 200 products in discount</p>
                    <p className="uppercase text-black font-extrabold text-6xl mt-2 mb-8">great deals</p>
                    <div className="flex gap-8">
                        <div className="flex items-start">
                            <p className="uppercase text-black font-extrabold mr-2">Startting at</p>
                            <p className="uppercase text-black font-extrabold text-3xl">$299</p>
                        </div>
                        <button className="bg-black text-white px-6 py-3 hover:bg-slate-800 uppercase font-bold">Get yours!</button>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default HeroSlider;
