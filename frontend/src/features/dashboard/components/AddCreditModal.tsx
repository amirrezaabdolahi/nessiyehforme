"use client";

import {
    CustomersDataAutoComplete,
    installmentTime,
} from "@/data/AutoCompletesData";
import { products } from "@/data/DashboardProducts";
import { ProductType } from "@/types/productTypes";
import { AddRounded, CloseRounded } from "@mui/icons-material";
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
import { debtsSliceActions } from "../childs/debts/slices/debtsFormSlice";

const AddCreditModal = () => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((s) => s.debtsForm);

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
                dispatch(debtsSliceActions.resetForm());
            }, 2000);
        });

        // Pass the promise to toast
        toast.promise(myPromise, {
            pending: "درحال ثبت نسیه...",
            success: "نسیه ثبت شد",
            error: "اوهو ارور داریم !",
        });
    }
    useEffect(() => {
        handleCost();
    }, [selectedProducts]);

    const handleClear = () => {
        dispatch(debtsSliceActions.resetForm())
        handleClose()
    }

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
                            ثبت نسیه
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
                                    options={CustomersDataAutoComplete}
                                    getOptionLabel={(option) => option.username}
                                    value={formData.customer}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option.id}>
                                                {option.username}
                                            </li>
                                        );
                                    }}
                                    onChange={(event, newValue) => {
                                        setSelectedCustomer(newValue);
                                        dispatch(
                                            debtsSliceActions.updateForm({
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
                                            debtsSliceActions.updateForm({
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
                                                debtsSliceActions.updateForm({
                                                    field: "price",
                                                    value: cost,
                                                }),
                                            );
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <Typography variant="body2">
                                        تاریخ
                                    </Typography>
                                    <TextField
                                        placeholder="مبلغ به ریال"
                                        size="small"
                                        fullWidth
                                        value={formData.date}
                                        onChange={(e) => {
                                            dispatch(
                                                debtsSliceActions.updateForm({
                                                    field: "date",
                                                    value: e.target.value,
                                                }),
                                            );
                                        }}
                                    />
                                </div>
                            </div>

                            <TextField
                                multiline
                                label="توضیحات"
                                size="small"
                                value={formData.description}
                                onChange={(e) => {
                                    dispatch(
                                        debtsSliceActions.updateForm({
                                            field: "description",
                                            value: e.target.value,
                                        }),
                                    );
                                }}
                            />
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

export default AddCreditModal;
