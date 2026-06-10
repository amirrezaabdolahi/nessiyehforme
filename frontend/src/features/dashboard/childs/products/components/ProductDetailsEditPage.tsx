"use client";
import CategorySelect from "@/components/dash/CategorySelectField";
import Container from "@/components/dash/Container";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import Link from "next/link";
import {
    useGetProductByIdQuery,
    useUpdateProductMutation,
} from "../api/ApiProduct";
import { useEffect, useState } from "react";
import { validateUpdateProductForm } from "@/utils/validations/ProductValidation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ProductDetailsEditPage = ({ id }: { id: string }) => {
    const { data, isLoading, isSuccess, error } = useGetProductByIdQuery(id);
    const [updateProduct, { isLoading: isUpdating }] =
        useUpdateProductMutation();

    const product = isSuccess ? data.product : null;

    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        barcode: "",
        buy_price: 0,
        sell_price: 0,
        stock: 0,
        exp_date: "",
        description: "",
    });
    const [errors, setErrors] = useState({
        name: false,
        barcode: false,
        buy_price: false,
        sell_price: false,
        stock: false,
        exp_date: false,
        description: false,
    });

    const [errorMessages, setErrorsMessages] = useState({
        name: "",
        barcode: "",
        buy_price: "",
        sell_price: "",
        stock: "",
        exp_date: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value }: { name: string; value: string | number } =
            e.target;
        const numericFields = ["buy_price", "sell_price", "stock"];

        if (numericFields.includes(name)) {
            value = value === "" ? "" : Number(value);
        }
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        type FormFields = keyof typeof validateUpdateProductForm.shape;

        const fieldName = name as FormFields;

        const validationResult =
            validateUpdateProductForm.shape[fieldName].safeParse(value);
        setErrors((prev) => ({
            ...prev,
            [name]: !validationResult.success,
        }));
        setErrorsMessages((prev) => ({
            ...prev,
            [name]: validationResult.success
                ? ""
                : validationResult.error.flatten().formErrors[0] || "",
        }));
    };

    useEffect(() => {
        if (product) {
            setForm({
                name: product.name || "",
                barcode: product.barcode || "",
                buy_price: product.buy_price || 0,
                sell_price: product.sell_price || 0,
                stock: product.stock || 0,
                exp_date: product.exp_date || "",
                description: product.description || "",
            });
        }
    }, [product]);

    const handleSubmit = async () => {
        try {
            const result = await updateProduct({
                id,
                data: form,
            }).unwrap();

            if (!result.ok) {
                router.push("/auth?mode=login");
            }

            toast.success("محصول با موفقیت آپدیت شد");
        } catch (error) {
            toast.error("مشکلی در آپدیت محصول به وجو آمده");
        }
    };

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
                        onChange={handleChange}
                        value={form.name || ""}
                        size="small"
                        label="نام محصول"
                        fullWidth
                        name="name"
                        error={errors.name}
                        helperText={errors.name ? errorMessages.name : ""}
                    />
                    <TextField
                        onChange={handleChange}
                        value={form.barcode || ""}
                        size="small"
                        label="بارکد"
                        fullWidth
                        name="barcode"
                        error={errors.barcode}
                        helperText={errors.barcode ? errorMessages.barcode : ""}
                    />
                    <div className="flex gap-2 w-full">
                        <TextField
                            onChange={handleChange}
                            value={form.buy_price || ""}
                            size="small"
                            label="قیمت خرید"
                            name="buy_price"
                            error={errors.buy_price}
                            helperText={
                                errors.buy_price ? errorMessages.buy_price : ""
                            }
                        />
                        <TextField
                            onChange={handleChange}
                            value={form.sell_price || ""}
                            size="small"
                            label="قیمت فروش"
                            name="sell_price"
                            error={errors.sell_price}
                            helperText={
                                errors.sell_price
                                    ? errorMessages.sell_price
                                    : ""
                            }
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <TextField
                            onChange={handleChange}
                            value={form.stock || ""}
                            size="small"
                            label="تعداد"
                            name="stock"
                            error={errors.stock}
                            helperText={errors.stock ? errorMessages.stock : ""}
                        />
                        <TextField
                            onChange={handleChange}
                            value={form.exp_date || ""}
                            size="small"
                            label="تاریخ انقضا"
                            name="exp_date"
                            error={errors.exp_date}
                            helperText={
                                errors.exp_date ? errorMessages.exp_date : ""
                            }
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <CategorySelect setCategory={null} />
                    </div>
                    <TextField
                        onChange={handleChange}
                        value={form.description || ""}
                        multiline
                        rows={3}
                        size="small"
                        label="توضیحات"
                        fullWidth
                        name="description"
                        error={errors.description}
                        helperText={
                            errors.description ? errorMessages.description : ""
                        }
                    />

                    <Button
                        size="small"
                        variant={"contained"}
                        disabled={isLoading || isUpdating}
                        onClick={handleSubmit}
                    >
                        ذخیره
                    </Button>
                </Card>
                <Avatar
                    variant="rounded"
                    className="w-70! h-90!"
                    alt={product.name}
                >
                    {product.name}
                </Avatar>
            </div>
        </Container>
    );
};

export default ProductDetailsEditPage;
