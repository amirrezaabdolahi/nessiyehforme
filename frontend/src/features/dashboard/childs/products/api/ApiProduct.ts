import { ProductModalFormType } from "@/types/modalsTypes";
import { ProductShowType, ProductType } from "@/types/productTypes";
import { env } from "@/utils/env/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiProduct = createApi({
    reducerPath: "ApiProduct",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query<{ ok: boolean, products: ProductShowType[] }, void>({
            query: () => "products/",
            providesTags: ["Products"],
        }),
        addProduct: builder.mutation<{ ok: boolean, product: ProductType }, ProductModalFormType>({
            query: (newProduct) => ({
                url: "products/",
                method: "POST",
                body: newProduct,
            }),
            invalidatesTags: ["Products"],
        }),
    }),
});

export const { useGetProductsQuery, useAddProductMutation } = ApiProduct;