
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiAccount = createApi({
    reducerPath: "ApiAccount",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    tagTypes: ["Shops", "Shop"],
    endpoints: (builder) => ({
        getShops: builder.query<void, void>({
            query: () => "account/my_shops",
            providesTags: ["Shops"]
        }),
        getShop: builder.query<void, string>({
            query: (id) => `account/my_shops/${id}/history`,
            providesTags: ["Shop"]
        })
    })
});

export const {
    useGetShopsQuery,
    useGetShopQuery
} = ApiAccount;