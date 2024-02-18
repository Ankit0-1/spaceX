import { createSlice } from "@reduxjs/toolkit";

const ModalReducer = createSlice({
    name: 'modal',
    initialState: {
        isModalOpen: false,
        ModalId: null
    },
    reducers: {
        toggleModal(state, action){
            state.isModalOpen = action.payload
        },
        addModalId(state, action) {
            state.ModalId = action.payload
        }
    }
})

export const { toggleModal, addModalId} = ModalReducer.actions;
export default ModalReducer.reducer;