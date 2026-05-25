import { CustomerModalFormType } from "@/types/modalsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: CustomerModalFormType = {
    fullname: '',
    phone: '',
    code: '',
    description: ''
}


const customerFormSlice = createSlice({
    name: 'customerForm',
    initialState,
    reducers: {
        updateForm: <K extends keyof CustomerModalFormType>(state: CustomerModalFormType, action: PayloadAction<{ field: K, value: CustomerModalFormType[K] }>) => {
            state[action.payload.field] = action.payload.value
        },
        resetForm: () => initialState
    }
})




export const customerSliceReducer = customerFormSlice.reducer
export const customerSliceActions = customerFormSlice.actions