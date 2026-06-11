"use client";

import {
    CustomersDataAutoComplete,
    installmentTime,
} from "@/data/AutoCompletesData";
import { products } from "@/data/DashboardProducts";
import { ProductType } from "@/types/productTypes";
import { AddRounded, CloseRounded, SelectAllSharp } from "@mui/icons-material";
import {
    Autocomplete,
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import { toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { salesSliceActions } from "../childs/debts/slices/debtsFormSlice";
import { useGetCustomerQuery } from "../childs/customers/api/ApiCustomer";
import { useGetProductsQuery } from "../childs/products/api/ApiProduct";

const AddSaleModal = () => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((s) => s.salesForm);

    const [open, setOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<{
        id: string | number | null;
        username: string | null;
    } | null>(null);

    const [selectedProducts, setSelectedProducts] = useState<
        ProductType[] | null
    >(null);

    const [cost, setCost] = useState<number>(0);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const {
        data: customersData,
        isLoading: isCustomerLoading,
        error: isCustomerError,
    } = useGetCustomerQuery();
    const {
        data: ProductsData,
        isLoading: isProuctLoading,
        error: isProuctError,
    } = useGetProductsQuery();

    const customers = customersData?.customers ?? [];
    // const products = ProductsData?.products ?? [];

    const handleCost = () => {
        if (!selectedProducts || selectedProducts.length === 0) {
            setCost(0);
            return;
        }
        const total = selectedProducts.reduce(
            (acc, product) => acc + product.sell_price,
            0,
        );
        setCost(total);
    };

    async function handleCreateCredit() {
        // Define the promise
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success or error
                const success = true;
                if (success) resolve("Data sent successfully!");
                else reject("Something went wrong!");
                dispatch(salesSliceActions.resetForm());
            }, 2000);
        });

        // Pass the promise to toast
        toast.promise(myPromise, {
            pending: "درحال ثبت نسیه...",
            success: "نسیه ثبت شد",
            error: "اوهو ارور داریم !",
        });
    }

    const handleClear = () => {
        dispatch(salesSliceActions.resetForm());
        handleClose();
    };

    return (
        <>
            <Button
                endIcon={<AddRounded fontSize="small" />}
                variant="outlined"
                onClick={handleOpen}
            >
                نسیه
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className=" bg-black/10 backdrop-blur-xs transition-all"
            >
                <ModalContainer>
                    <Box className="p-2 flex items-center justify-between w-full border-b border-gray-200">
                        <Typography variant="subtitle1" className="font-bold!">
                            ثبت فروش
                        </Typography>
                        <IconButton color="error" onClick={handleClose}>
                            <CloseRounded />
                        </IconButton>
                    </Box>
                    <Box className="p-4">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Typography variant="body2">مشتری</Typography>
                                <Autocomplete
                                    disablePortal
                                    id="category-select"
                                    options={customers}
                                    getOptionLabel={(option) => option.full_name}
                                    value={formData.customer}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option.id}  >
                                                <span>{option.full_name}</span>
                                                -
                                                <span>{option.phone_number}</span>
                                            </li>
                                        );
                                    }}
                                    onChange={(event, newValue) => {
                                        setSelectedCustomer(newValue);
                                        dispatch(
                                            salesSliceActions.updateForm({
                                                field: "customer",
                                                value: newValue,
                                            }),
                                        );
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="انتخاب کنید..."
                                        />
                                    )}
                                    size="small"
                                    fullWidth
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Typography variant="body2">مصولات</Typography>
                                <Autocomplete
                                    disablePortal
                                    multiple
                                    id="category-select"
                                    options={products}
                                    getOptionLabel={(option) => option.name}
                                    value={formData.products}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option.id}>
                                                {option.name}
                                            </li>
                                        );
                                    }}
                                    onChange={(event, newValue) => {
                                        setSelectedProducts((old) => newValue);
                                        dispatch(
                                            salesSliceActions.updateForm({
                                                field: "products",
                                                value: newValue,
                                            }),
                                        );
                                    }}
                                    disabled={!selectedCustomer}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="انتخاب کنید..."
                                        />
                                    )}
                                    size="small"
                                    fullWidth
                                />
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        مبلغ (ریال)
                                    </Typography>
                                    <TextField
                                        placeholder="مبلغ به ریال"
                                        size="small"
                                        fullWidth
                                        value={formData.price}
                                        onChange={(e) => {
                                            dispatch(
                                                salesSliceActions.updateForm({
                                                    field: "price",
                                                    value: cost,
                                                }),
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </form>
                    </Box>
                    <div className="flex gap-2 border-t border-gray-300 pt-4 ">
                        <Button
                            onClick={handleCreateCredit}
                            variant="contained"
                        >
                            ثبت نسیه
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={handleClear}
                        >
                            انصراف
                        </Button>
                    </div>
                </ModalContainer>
            </Modal>
        </>
    );
};

export default AddSaleModal;
