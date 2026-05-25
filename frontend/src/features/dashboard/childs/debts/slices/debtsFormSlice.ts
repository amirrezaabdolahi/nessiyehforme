import { DebtModalFormType } from "@/types/modalsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: DebtModalFormType = {
    customer: null,
    date: '',
    description: '',
    period: null,
    price: 0,
    products: []
}


const debtsFormSlice = createSlice({
    name: "debtsForm",
    initialState,
    reducers: {
        updateForm: <K extends keyof DebtModalFormType>(state : DebtModalFormType, action: PayloadAction<{ field: K, value: DebtModalFormType[K] }>) => {
            state[action.payload.field] = action.payload.value
        },
        resetForm: () => initialState
    }
})



export const debtsSliceReducer = debtsFormSlice.reducer;
export const debtsSliceActions = debtsFormSlice.actions;
