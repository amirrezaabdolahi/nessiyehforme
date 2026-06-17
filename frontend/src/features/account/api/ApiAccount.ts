
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiAccount = createApi({
    reducerPath: "ApiAccount",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    tagTypes: ["Shops"],
    endpoints: (builder) => ({
        getShops: builder.query<void, void>({
            query: () => "account/my_shops",
            providesTags: ["Shops"]
        })
    })
});

export const {
    useGetShopsQuery,
    
} = ApiAccount;