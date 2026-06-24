import { addPaymentResponse, PostPaymentBody } from "@/types/ApiResponesesType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ApiPayment = createApi({
    reducerPath: "ApiPayment",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),

    endpoints: (builder) => ({
        addPayment: builder.mutation<addPaymentResponse, PostPaymentBody>({
            query: (data) => ({
                url: "payment/",
                method: "POST",
                body: JSON.stringify(data)
            })
        })
    })
})


export const {
    useAddPaymentMutation
} = ApiPayment