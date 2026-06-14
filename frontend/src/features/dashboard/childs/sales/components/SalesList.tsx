"use client";

import { useGetSalesQuery } from "../api/ApiSales";
import SaleRow from "./SaleRow";

const SalesList = () => {
    const { data, isLoading, error, isSuccess } = useGetSalesQuery();

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
            {isSuccess && sales.length > 0 ? (
                sales.map((sale) => <SaleRow sale={sale} key={sale.id} />)
            ) : (
                <p>فروشی یافت نشد</p>
            )}
        </>
    );
};

export default SalesList;
