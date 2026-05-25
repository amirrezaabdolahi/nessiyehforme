"use client";

import {
    CustomersDataAutoComplete,
    CustomersUsernameAndId,
    methodsAutocomplete,
} from "@/data/AutoCompletesData";
import { Payment } from "@/types/paymentTypes";
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
import { useState } from "react";
import ModalContainer from "./ModalContainer";
import { toast } from "react-toastify";
import { paymentSliceActions } from "../childs/payments/slices/paymentFormSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

const AddPaymentModal = () => {
    // datas that comes from redux paymentsForm
    const formData = useAppSelector((s) => s.paymentsForm);

    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedCustomer, setSelectedCustomer] =
        useState<CustomersUsernameAndId | null>(null);

    const [debts, setDebts] = useState<Payment[] | null>(null);

    async function handleSubmitPayment() {
        // Define the promise
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success or error
                const success = true;
                if (success) resolve("Data sent successfully!");
                else reject("Something went wrong!");
                dispatch(paymentSliceActions.resetForm())
            }, 2000);
        });

        // Pass the promise to toast
        toast.promise(myPromise, {
            pending: "درحال ثبت پرداخت...",
            success: "پرداخت ثبت شد",
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
                پرداخت
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
                            ثبت پرداختی
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
                                            paymentSliceActions.updateForm({
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
                                <Typography variant="body2">نسیه</Typography>
                                <Autocomplete
                                    disablePortal
                                    id="category-select"
                                    options={CustomersDataAutoComplete}
                                    getOptionLabel={(option) => option.username}
                                    value={formData.debts}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option.id}>
                                                {option.username}
                                            </li>
                                        );
                                    }}
                                    disabled={!selectedCustomer && !debts}
                                    onChange={(event, newValue) => {
                                        dispatch(
                                            paymentSliceActions.updateForm({
                                                field: "debts",
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
                                                paymentSliceActions.updateForm({
                                                    field: "price",
                                                    value: e.target.value,
                                                }),
                                            );
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <Typography variant="body2">روش</Typography>
                                    <Autocomplete
                                        disablePortal
                                        id="category-select"
                                        options={methodsAutocomplete}
                                        getOptionLabel={(option) => option.name}
                                        renderOption={(props, option) => {
                                            return (
                                                <li {...props} key={option.id}>
                                                    {option.name}
                                                </li>
                                            );
                                        }}
                                        value={formData.method}
                                        onChange={(event, newValue) => {
                                            dispatch(
                                                paymentSliceActions.updateForm({
                                                    field: "method",
                                                    value: newValue,
                                                }),
                                            );
                                        }}
                                        disabled={!selectedCustomer && !debts}
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
                            <div className="flex items-center gap-2 w-full">
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
                                                paymentSliceActions.updateForm({
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
                                rows={3}
                                label="توضیحات"
                                size="small"
                                value={formData.description}
                                onChange={(e) => {
                                    dispatch(
                                        paymentSliceActions.updateForm({
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
                            variant="contained"
                            onClick={handleSubmitPayment}
                        >
                            ثبت پرداختی
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                                dispatch(paymentSliceActions.resetForm());
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

export default AddPaymentModal;
