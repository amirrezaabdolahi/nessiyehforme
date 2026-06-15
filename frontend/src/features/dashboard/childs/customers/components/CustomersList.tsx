"use client";

import React from "react";
import { useGetCustomersQuery } from "../api/ApiCustomer";
import CustomerRow from "../../components/CustomerRow";
import Link from "next/link";

const CustomersList = () => {
    const { data, isLoading, error } = useGetCustomersQuery();

    if (isLoading) {
        return <p>loading...</p>;
    }
    if (error) {
        return <p>Something went wrong.</p>;
    }

    const customers = data?.customers ?? [];
    console.log(customers);

    return (
        <>
            {customers.map((customer) => (
                <Link href={`customers/${customer.id}`} key={customer.id}>
                    <CustomerRow customer={customer} />
                </Link>
            ))}
        </>
    );
};

export default CustomersList;
