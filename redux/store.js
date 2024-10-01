import CartSlice from "./CartSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        CartSlice,
    },
});

export default store;
