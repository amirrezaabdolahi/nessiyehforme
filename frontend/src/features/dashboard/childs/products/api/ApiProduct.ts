import { ProductShowType, ProductType } from "@/types/productTypes";
import { env } from "@/utils/env/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiProduct = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<{ ok: boolean, products: ProductShowType[] }, void>({
            query: () => "products/",
        }),
    }),
});

export const { useGetProductsQuery } = ApiProduct;