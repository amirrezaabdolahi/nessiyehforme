import { DebtType } from "@/data/DashboardCredits";
import { SaleType } from "@/data/DashboardSale";
import { CustomerType } from "@/types/customerType";
import { CustomerModalFormType } from "@/types/modalsTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CustomerResponse {
    ok: boolean,
    customers: Array<{ id: number, phone_number: string, full_name: string }>
}
interface CustomeResponse {
    ok: boolean,
    customer: { id: number, phone_number: string, full_name: string }
}
interface CustomerCreditsResponse {
    ok: boolean,
    customer: CustomerType,
    sales: Array<SaleType>,
    debts: Array<DebtType>
}

export const ApiCustomer = createApi({
    reducerPath: "ApiCustomer",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    tagTypes: ["Customers", "Customer"],
    endpoints: (builder) => ({
        getCustomers: builder.query<CustomerResponse, void>({
            query: () => "customers/",
            providesTags: ["Customers"]
        }),
        getCustomer: builder.query<CustomeResponse, void>({
            query: (id) => `customers/${id}`,
            providesTags: ["Customers"]
        }),
        getCustomerCredits: builder.query<CustomerCreditsResponse, string>({
            query: (id) => `customers/${id}/history/`,
            providesTags: ["Customer"]
        }),
        addCustomer: builder.mutation<CustomerResponse, CustomerModalFormType>({
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