import { DebtModalFormType } from "@/types/modalsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: DebtModalFormType = {
    customer_id: null,
    price: 0,
    items: []
}


const saleFormSlice = createSlice({
    name: "salesForm",
    initialState,
    reducers: {
        updateForm: <K extends keyof DebtModalFormType>(state : DebtModalFormType, action: PayloadAction<{ field: K, value: DebtModalFormType[K] }>) => {
            state[action.payload.field] = action.payload.value
        },
        resetForm: () => initialState
    }
})



export const salesSliceReducer = saleFormSlice.reducer;
export const salesSliceActions = saleFormSlice.actions;
