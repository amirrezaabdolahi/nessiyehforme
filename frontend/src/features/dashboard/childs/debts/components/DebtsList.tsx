"use client";
import React from "react";
import { useGetDebtsQuery } from "../../sales/api/ApiSales";
import DebtsCreaditsRows from "./DebtsCreaditsRows";

const DebtsList = () => {
    const { data, isLoading, error, isSuccess } = useGetDebtsQuery();

    if (isLoading) {
        return <p>loading...</p>;
    }
    if (error) {
        return <p>Something went wrong.</p>;
    }

    const debts = data?.debts ?? [];

    console.log(debts);

    return (
        <>
            {isSuccess && debts.length > 0 ? (
                debts.map((debt) => (
                    <DebtsCreaditsRows key={debt.id} debt={debt} />
                ))
            ) : (
                <p>نیسه ای یافت نشد</p>
            )}
        </>
    );
};

export default DebtsList;
