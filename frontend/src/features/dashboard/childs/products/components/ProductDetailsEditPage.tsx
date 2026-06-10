"use client";
import CategorySelect from "@/components/dash/CategorySelectField";
import Container from "@/components/dash/Container";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useGetProductByIdQuery } from "../api/ApiProduct";
import { useState } from "react";
import { ProductType } from "@/types/productTypes";
import { ProductModalFormType } from "@/types/modalsTypes";

const ProductDetailsEditPage = ({ id }: { id: string }) => {
    const { data, isLoading, isSuccess, error } = useGetProductByIdQuery(id);

    console.log(error);

    const product = isSuccess ? data.product : null;

    const [form, setForm] = useState({
        name: product?.name,
        barcode: product?.barcode,
        buy_price: product?.buy_price,
        sell_price: product?.sell_price,
        stock: product?.stock,
        exp_date: product?.exp_date,
        description: product?.description,
    });


    if (isLoading) {
        return (
            <Container>
                <div className="w-full h-screen flex items-center justify-center">
                    <Typography variant="h6">در حال بارگذاری...</Typography>
                </div>
            </Container>
        );
    }

    if (!product) {
        return (
            <Container>
                <div className="w-full h-screen flex items-center justify-center">
                    <Typography variant="h6">محصول یافت نشد</Typography>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="w-full flex items-center justify-between">
                <Link href={`/dashboard/products/${id}`}>
                    <Button
                        size="small"
                        startIcon={<ArrowForwardIosRounded fontSize="small" />}
                        variant="outlined"
                    >
                        برگشت
                    </Button>
                </Link>
            </div>
            <div className="flex w-full items-center justify-center flex-wrap gap-4">
                <Card className="flex flex-col gap-4 p-4">
                    <TextField
                        value={product.name}
                        size="small"
                        label="نام محصول"
                        fullWidth
                    />
                    <TextField
                        value={product.barcode}
                        size="small"
                        label="بارکد"
                        fullWidth
                    />
                    <div className="flex gap-2 w-full">
                        <TextField
                            value={product.buy_price}
                            size="small"
                            label="قیمت خرید"
                        />
                        <TextField
                            value={product.sell_price}
                            size="small"
                            label="قیمت فروش"
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <TextField
                            value={product.stock}
                            size="small"
                            label="تعداد"
                        />
                        <TextField
                            value={product.exp_date}
                            size="small"
                            label="تاریخ انقضا"
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <CategorySelect setCategory={null} />
                    </div>
                    <TextField
                        value={product.description || ""}
                        multiline
                        rows={3}
                        size="small"
                        label="توضیحات"
                        fullWidth
                    />

                    <Button size="small" variant={"contained"}>
                        ذخیره
                    </Button>
                </Card>
                <Avatar variant="rounded" className="w-70! h-90!" alt={"amir"}>
                    {"a"}
                </Avatar>
            </div>
        </Container>
    );
};

export default ProductDetailsEditPage;
