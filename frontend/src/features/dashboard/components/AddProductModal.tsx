"use client";

import { markets } from "@/data/DashboardMarkets";
import { ProductType } from "@/types/productTypes";
import { branches, categories } from "@/utils/filteringData";
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
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { productFormActions } from "../childs/products/slices/productFormSlice";

const AddProductModal = () => {
    const formData = useAppSelector((e) => e.productsForm);
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function handleAddProduct() {
        // Define the promise
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success or error
                const success = true;
                if (success) resolve("Data sent successfully!");
                else reject("Something went wrong!");
            }, 2000);
        });

        // Pass the promise to toast
        toast.promise(myPromise, {
            pending: "درحال ثبت محصول...",
            success: "محصول ثبت شد",
            error: "اوهو ارور داریم !",
        });
    }

    return (
        <>
            <Button
                endIcon={<AddRounded fontSize="small" />}
                variant="contained"
                onClick={handleOpen}
            >
                محصول
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className=" bg-black/10 backdrop-blur-xs transition-all "
            >
                <ModalContainer>
                    <Box className="p-2 flex items-center justify-between w-full border-b border-gray-200">
                        <Typography variant="subtitle1" className="font-bold!">
                            ثبت محصول جدید
                        </Typography>
                        <IconButton color="error" onClick={handleClose}>
                            <CloseRounded />
                        </IconButton>
                    </Box>
                    <Box className="p-4">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Typography variant="body2">
                                    نام محصول
                                </Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                    placeholder="علی سعادت"
                                    value={formData.name}
                                    onChange={(e) => {
                                        dispatch(
                                            productFormActions.updateForm({
                                                field: "name",
                                                value: e.target.value,
                                            }),
                                        );
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Typography variant="body2">بارکد</Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                    placeholder="6269334116182"
                                    value={formData.barcode}
                                    onChange={(e) => {
                                        dispatch(
                                            productFormActions.updateForm({
                                                field: "barcode",
                                                value: e.target.value,
                                            }),
                                        );
                                    }}
                                />
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        مبلغ خرید
                                    </Typography>
                                    <TextField
                                        placeholder="مبلغ به ریال ، (نامحدود)"
                                        size="small"
                                        fullWidth
                                        value={formData.buy_price}
                                        onChange={(e) => {
                                            dispatch(
                                                productFormActions.updateForm({
                                                    field: "buy_price",
                                                    value: e.target.value,
                                                }),
                                            );
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="w-full">
                                        <Typography variant="body2">
                                            مبلغ فروش
                                        </Typography>
                                        <TextField
                                            placeholder="مبلغ به ریال ، (نامحدود)"
                                            size="small"
                                            fullWidth
                                            value={formData.sell_price}
                                            onChange={(e) => {
                                                dispatch(
                                                    productFormActions.updateForm(
                                                        {
                                                            field: "sell_price",
                                                            value: e.target
                                                                .value,
                                                        },
                                                    ),
                                                );
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        تاریخ
                                    </Typography>
                                    <TextField
                                        placeholder="1404/05/29"
                                        size="small"
                                        fullWidth
                                        value={formData.date}
                                        onChange={(e) => {
                                            dispatch(
                                                productFormActions.updateForm({
                                                    field: "date",
                                                    value: e.target.value,
                                                }),
                                            );
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <Typography variant="body2">
                                        تاریخ انقضا (اختیاری)
                                    </Typography>
                                    <TextField
                                        placeholder="1404/05/29"
                                        size="small"
                                        fullWidth
                                        value={formData.exp_date}
                                        onChange={(e) => {
                                            dispatch(
                                                productFormActions.updateForm({
                                                    field: "exp_date",
                                                    value: e.target.value,
                                                }),
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        دسته بندی
                                    </Typography>
                                    <Autocomplete
                                        disablePortal
                                        id="category-select"
                                        options={categories}
                                        getOptionLabel={(option) => option.name}
                                        value={formData.categorie}
                                        onChange={(event, newValue) => {
                                            dispatch(
                                                productFormActions.updateForm({
                                                    field: "categorie",
                                                    value: newValue,
                                                }),
                                            );
                                        }}
                                        renderOption={(props, option) => {
                                            return (
                                                <li {...props} key={option.id}>
                                                    {option.name}
                                                </li>
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
                                <div className="w-full">
                                    <Typography variant="body2">
                                        شاخه
                                    </Typography>
                                    <Autocomplete
                                        disablePortal
                                        id="branch-select"
                                        options={
                                            branches[
                                                `${formData.categorie?.value}`
                                            ]
                                        }
                                        getOptionLabel={(option) => option.name}
                                        value={formData.branch}
                                        onChange={(event, newValue) => {
                                            dispatch(
                                                productFormActions.updateForm({
                                                    field: "branch",
                                                    value: newValue,
                                                }),
                                            );
                                        }}
                                        renderOption={(props, option) => {
                                            return (
                                                <li {...props} key={option.id}>
                                                    {option.name}
                                                </li>
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
                            </div>
                            <TextField
                                multiline
                                rows={3}
                                label="توضیحات"
                                size="small"
                                value={formData.description}
                                onChange={(e) => {
                                    dispatch(
                                        productFormActions.updateForm({
                                            field: "description",
                                            value: e.target.value,
                                        }),
                                    );
                                }}
                            />
                        </form>
                    </Box>
                    <div className="flex gap-2 border-t border-gray-300 pt-4 ">
                        <Button variant="contained" onClick={handleAddProduct}>
                            ثبت محصول
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                                dispatch(productFormActions.resetForm() );
                                handleClose();
                            }}
                        >
                            انصراف
                        </Button>
                    </div>
                </ModalContainer>
            </Modal>
        </>
    );
};

export default AddProductModal;
