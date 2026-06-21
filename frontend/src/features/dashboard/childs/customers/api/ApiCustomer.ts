import { GetCustomerDetailsResponse, GetCustomerResponse, GetCustomersResponse } from "@/types/ApiResponesesType";
import { CustomerModalFormType } from "@/types/modalsTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ApiCustomer = createApi({
    reducerPath: "ApiCustomer",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    tagTypes: ["Customers", "Customer"],
    endpoints: (builder) => ({
        getCustomers: builder.query<GetCustomersResponse, void>({
            query: () => "customers/",
            providesTags: ["Customers"]
        }),
        getCustomer: builder.query<GetCustomerResponse, string>({
            query: (id) => `customers/${id}/`,
            providesTags: ["Customers"]
        }),
        getCustomerCredits: builder.query<GetCustomerDetailsResponse, string>({
            query: (id) => `customers/${id}/history/`,
            providesTags: ["Customer"]
        }),
        addCustomer: builder.mutation<GetCustomersResponse, CustomerModalFormType>({
            query: (data) => ({
                url: "customers/",
                method: "POST",
                body: JSON.stringify(data)
            }),
            invalidatesTags: ["Customers"]
        })
    })
})

export const {
    useGetCustomersQuery,
    useAddCustomerMutation,
    useGetCustomerCreditsQuery,
    useGetCustomerQuery
} = ApiCustomer