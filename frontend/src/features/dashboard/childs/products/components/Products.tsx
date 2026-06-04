"use client";

import { useState } from "react";
import { useGetProductsQuery } from "../api/ApiProduct";

const GetProducts = async () => {
    const { data, isLoading, isSuccess } = useGetProductsQuery();

    if (isLoading) {
      return ;
    }

    console.log(data);

    return (
      <></>
    );
};

export default GetProducts;
