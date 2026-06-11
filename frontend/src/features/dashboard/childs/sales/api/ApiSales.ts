import { CustomerModalFormType } from "@/types/modalsTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface SalesResponesType {
    ok: boolean,
    sales: Array<{
        id: number,
        shop: number,
        customer: number,
        customer_name: string,
        items: {
            id: number,
            product_id: number,
            product_name: string,
            quantity: number,
            price: number
        }[],
        total: number,
    }>
}

export const ApiSales = createApi({
    reducerPath: "ApiSales",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    tagTypes: ["Sales"],
    endpoints: (builder) => ({
        getSales: builder.query<SalesResponesType, void>({
            query: () => "sales/",
            providesTags: ["Sales"]
        }),
        addSales: builder.mutation<SalesResponesType, CustomerModalFormType>({
            query: (data) => ({
                url: "sales/",
                method: "POST",
                body: JSON.stringify(data)
            }),
            invalidatesTags: ["Sales"]
        })
    })
})

export const { useGetSalesQuery, useAddSalesMutation } = ApiSales