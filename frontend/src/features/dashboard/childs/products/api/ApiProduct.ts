import { ProductModalFormType } from "@/types/modalsTypes";
import { ProductShowType, ProductType } from "@/types/productTypes";
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
        getProductById: builder.query<{ ok: boolean, product: ProductType }, string>({
            query: (id) => `products/${id}/`,
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
        deleteProduct: builder.mutation<any, any>({
            query: (id) => ({
                url: `products/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"]
        }),
        updateProduct: builder.mutation<{ ok: boolean; product: ProductType }, { id: string; data: Partial<ProductType> }>({
            query: ({ id, data }) => ({
                url: `products/${id}/`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Products"],
        }),

    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
} = ApiProduct;