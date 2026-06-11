"use client";

import { useGetSalesQuery } from "../api/ApiSales";
import SaleRow from "./SaleRow";

const SalesList = () => {
    const { data, isLoading, error } = useGetSalesQuery();

    if (isLoading) {
        return <p>loading...</p>;
    }
    if (error) {
        return <p>Something went wrong.</p>;
    }

    const sales = data?.sales ?? [];

    console.log(sales);

    return (
        <>
            {sales.map((sale) => (
                <SaleRow sale={sale} key={sale.id} />
            ))}
        </>
    );
};

export default SalesList;
