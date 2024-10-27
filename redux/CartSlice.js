import { getCookie, setCookie } from "cookies-next";

const { createSlice } = require("@reduxjs/toolkit");

const checkCart = () => {
    if (getCookie("cartItems")) {
        return JSON.parse(getCookie("cartItems"));
    } else {
        return [];
    }
};

const calcTotalAmount = (cart) => {
    const total = cart.reduce((acc, item) => {
        acc = +item.newPrice + acc;
        return acc;
    }, 0);
    return total.toFixed(2);
};

const checkTotalAmount = () => {
    const cart = checkCart();
    if (cart.length > 0) {
        return calcTotalAmount(cart);
    } else {
        return 0;
    }
};

const CartSlice = createSlice({
    name: "CartSlice",
    initialState: {
        cartItems: checkCart(),
        totalPrice: checkTotalAmount(),
        isSideCartOpen: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const isExits = state.cartItems.some((item) => item.id === action.payload.id);
            if (!isExits) {
                state.cartItems.push(action.payload);
            }
            state.totalPrice = calcTotalAmount(state.cartItems);
            setCookie("cartItems", state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id != action.payload);
            state.totalPrice = calcTotalAmount(state.cartItems);
            setCookie("cartItems", state.cartItems);
        },
        opneSideCart: (state) => {
            console.log("hi");
            state.isSideCartOpen = true;
        },
        closeSideCart: (state) => {
            state.isSideCartOpen = false;
        },
    },
});

export const { addToCart, removeFromCart, opneSideCart, closeSideCart } = CartSlice.actions;
export default CartSlice.reducer;
