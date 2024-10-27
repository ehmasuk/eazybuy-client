"use client";

import { addToCart, opneSideCart } from "@/redux/CartSlice";
import { message } from "antd";
import { useDispatch } from "react-redux";

function AddToCartButton({ product, className, label }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        message.success("Product added to cart");
        dispatch(opneSideCart());
    };

    return (
        <button className={className} onClick={handleAddToCart}>
            {label}
        </button>
    );
}

export default AddToCartButton;
