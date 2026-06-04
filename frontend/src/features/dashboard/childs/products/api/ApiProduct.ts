import { env } from "@/utils/env/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiProduct = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8080/api/",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<[], void>({
            query: () => "products/",
        }),
    }),
});

export const { useGetProductsQuery } = ApiProduct;