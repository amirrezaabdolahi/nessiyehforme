"use client";

import { useState } from "react";
import { useGetProductsQuery } from "../api/ApiProduct";
import Product from "@/features/dashboard/components/Product";

const GetProducts = () => {
    const { data, isLoading, isSuccess } = useGetProductsQuery();

    if (isLoading) {
        return;
    }

    console.log(data);

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
