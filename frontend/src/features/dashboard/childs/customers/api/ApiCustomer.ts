import { CustomerModalFormType } from "@/types/modalsTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CustomerResponse {
    ok: boolean,
    customers: Array<{ id: number, phone_number: string, full_name: string }>
}

export const ApiCustomer = createApi({
    reducerPath: "ApiCustomer",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    tagTypes: ["Customers"],
    endpoints: (builder) => ({
        getCustomer: builder.query<CustomerResponse, void>({
            query: () => "customers/",
            providesTags: ["Customers"]
        }),
        addCustomer: builder.mutation<CustomerResponse , CustomerModalFormType >({
            query: (data) => ({
                url: "customers/",
                method: "POST",
                body: JSON.stringify(data)
            }),
            invalidatesTags: ["Customers"]
        })
    })
})

export const { useGetCustomerQuery, useAddCustomerMutation } = ApiCustomer