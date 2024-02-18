import { configureStore } from "@reduxjs/toolkit";
import RocketInfoSlice from "../slice/RocketInfoSlice";
import ModalSlice from "../slice/ModalSlice";

const store = configureStore({
    reducer: {
        rocketInfo: RocketInfoSlice,
        ModalData: ModalSlice
    }
})

export default store;