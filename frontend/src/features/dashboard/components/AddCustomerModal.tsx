"use client";

import { AddRounded, CloseRounded } from "@mui/icons-material";
import {
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
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { customerSliceActions } from "../childs/customers/slices/customerFormSlice";

const AddCustomerModal = () => {
    const formData = useAppSelector((s) => s.customersForm);
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function handleCreateCustomer() {
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
            pending: "درحال ثبت مشتری...",
            success: "مشتری ثبت شد",
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
                مشتری
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
                            ثبت مشتری جدید
                        </Typography>
                        <IconButton color="error" onClick={handleClose}>
                            <CloseRounded />
                        </IconButton>
                    </Box>
                    <Box className="p-4">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <Typography variant="body2">
                                    نام و نام خانوادگی
                                </Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                    placeholder="علی سعادت"
                                    value={formData.fullname}
                                    onChange={(e) => {
                                        dispatch(
                                            customerSliceActions.updateForm({
                                                field: "fullname",
                                                value: e.target.value,
                                            }),
                                        );
                                    }}
                                />
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-full">
                                    <Typography variant="body2">
                                        شماره موبایل
                                    </Typography>
                                    <TextField
                                        placeholder="*******0922"
                                        size="small"
                                        fullWidth
                                        value={formData.phone}
                                        onChange={(e) => {
                                            dispatch(
                                                customerSliceActions.updateForm(
                                                    {
                                                        field: "phone",
                                                        value: e.target.value,
                                                    },
                                                ),
                                            );
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="w-full">
                                        <Typography variant="body2">
                                            کدملی (اختیاری)
                                        </Typography>
                                        <TextField
                                            placeholder="*******282"
                                            size="small"
                                            fullWidth
                                            value={formData.code}
                                            onChange={(e) => {
                                                dispatch(
                                                    customerSliceActions.updateForm(
                                                        {
                                                            field: "code",
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

                            <TextField
                                multiline
                                rows={3}
                                label="توضیحات"
                                size="small"
                                value={formData.description}
                                onChange={(e) => {
                                    dispatch(
                                        customerSliceActions.updateForm({
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
                            onClick={handleCreateCustomer}
                        >
                            ثبت مشتری
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                                dispatch(customerSliceActions.resetForm());
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

export default AddCustomerModal;
