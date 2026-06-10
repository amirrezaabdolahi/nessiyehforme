import { ProductModalFormType } from "@/types/modalsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductModalFormType = {
    name: '',
    barcode: '',
    buy_price: 0,
    sell_price: 0,
    exp_date: '',
    category: null,
    description: '',
    stock: 0,
}



const productFormSlice = createSlice({
    name: 'productForm',
    initialState,
    reducers: {
        updateForm: <K extends keyof ProductModalFormType>(state: ProductModalFormType, action: PayloadAction<{ field: K, value: ProductModalFormType[K] }>) => {
            state[action.payload.field] = action.payload.value
        },
        resetForm: () => initialState
    }
})



export const productFormReducers = productFormSlice.reducer
export const productFormActions = productFormSlice.actions