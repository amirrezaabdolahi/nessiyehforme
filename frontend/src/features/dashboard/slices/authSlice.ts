import { userType } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface authSliceProps {
    isLoggedIn: boolean,
    user: userType | null,
    isLoading: boolean,
    error: string | boolean | null
}

const initialState: authSliceProps = {
    isLoggedIn: false,
    user: {
        username: "امیررضا عبدالهی",
        phone: "09225621256",
        email: "amirezaabdolahi752@gmail.com"
    },
    isLoading: false,
    error: null,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
})

export const authReducer = authSlice.reducer
export const authSliceActions = authSlice.actions