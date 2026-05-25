import { PaymentModalFormType } from "@/types/modalsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PaymentModalFormType = {
    method:  { id: 1, name: "کارت", value: 'card' },
    customer: null,
    date: '',
    debts: null,
    price: 0,
    description: ""
}

const paymentFormSlice = createSlice({
    name: 'paymentForm',
    initialState,
    reducers: {
        updateForm: <K extends keyof PaymentModalFormType>(state : PaymentModalFormType, action: PayloadAction<{ field: K, value: PaymentModalFormType[K] }>) => {
            state[action.payload.field] = action.payload.value
        },
        resetForm: () => initialState
    }
})

export const paymentSliceReducer = paymentFormSlice.reducer;
export const paymentSliceActions = paymentFormSlice.actions;
