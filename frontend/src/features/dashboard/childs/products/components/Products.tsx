"use client";

import { useState } from "react";
import { useGetProductsQuery } from "../api/ApiProduct";
import Product from "@/features/dashboard/components/Product";
import ProductListLoading from "./ProductSkeletone";
import { useRouter } from "next/navigation";

const GetProducts = () => {
    const { data, error, isLoading, isSuccess } = useGetProductsQuery();

    const router = useRouter();

    if (isLoading) {
        return <ProductListLoading count={3} />;
    }

    if (error) {
        if ("status" in error && error.status === 401) {
            return <p>Unauthorized</p>;
        }

        return <p>Something went wrong</p>;
    }
    return (
        <>
            {isSuccess && data.products.length > 0 ? (
                data.products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            ) : (
                <p className="text-center text-gray-500">محصولی یافت نشد.</p>
            )}
        </>
    );
};

export default GetProducts;
