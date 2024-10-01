function NewsLatter() {
    return (
        <div className="py-20 px-5 border-t border-gray-200 flex flex-col items-center gap-10 justify-center">
            <p className="lg:text-3xl text-xl text-center">Join our newsletter and get $20 discount for your first order</p>
            <div className="flex items-center gap-2">
                <input type="text" placeholder="Enter your email" className="w-[300px] max-w-full outline-none p-3 border border-black " />
                <button className="bg-black text-white p-3 hover-effect uppercase">Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLatter;
