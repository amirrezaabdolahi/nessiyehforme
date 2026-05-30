import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface UserInfoType {
    phone_number: string,
    full_name: string,
    email?: string,
    password: string,
    isAuthenticated?: boolean
}


const initialState: UserInfoType = {
    phone_number: '',
    full_name: '',
    email: '',
    password: '',
    isAuthenticated: false
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        updateForm: <K extends keyof UserInfoType>(state: UserInfoType, action: PayloadAction<{ field: K, value: UserInfoType[K] }>) => {
            state[action.payload.field] = action.payload.value
        },
        resetForm: () => initialState
    }
})


export const userInfoReducer = userInfoSlice.reducer
export const userInfoActions = userInfoSlice.actions