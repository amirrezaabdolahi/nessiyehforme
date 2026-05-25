import { customerSliceReducer } from "@/features/dashboard/childs/customers/slices/customerFormSlice"
import { debtsSliceReducer } from "@/features/dashboard/childs/debts/slices/debtsFormSlice"
import { paymentSliceReducer } from "@/features/dashboard/childs/payments/slices/paymentFormSlice"
import { productFormReducers } from "@/features/dashboard/childs/products/slices/productFormSlice"
import { configureStore } from "@reduxjs/toolkit"
import { userInfoReducer } from "@/features/auth/slices/userInformationsSlice"



export const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        debtsForm: debtsSliceReducer,
        paymentsForm: paymentSliceReducer,
        customersForm: customerSliceReducer,
        productsForm: productFormReducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch