"use client";
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
import { createFilterOptions } from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import { useAppDispatch } from "@/lib/redux/hooks";
import { salesSliceActions } from "../childs/debts/slices/debtsFormSlice";
import { useGetCustomersQuery } from "../childs/customers/api/ApiCustomer";
import { useGetProductsQuery } from "../childs/products/api/ApiProduct";
import { useAddSalesMutation } from "../childs/sales/api/ApiSales";
import { number } from "zod";
import { toast } from "react-toastify";
import { PostSalesType } from "@/types/ApiResponesesType";

const AddSaleModal = () => {
    const dispatch = useAppDispatch();

    const [form, setForm] = useState<PostSalesType>({
        customer_id: null,
        items: [],
    });

    const [open, setOpen] = useState(false);

    const [selectedCustomer, setSelectedCustomer] = useState<{
        id: number;
        phone_number: string;
        full_name: string;
    } | null>(null);

    const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);

    const [cost, setCost] = useState<number>(0);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };
    const filterOptions = createFilterOptions({
        stringify: (option: {
            id: number;
            phone_number: string;
            full_name: string;
        }) => `${option.full_name} ${option.phone_number}`,
    });

    // products api RTKQuery
    const {
        data: customersData,
        isLoading: isCustomerLoading,
        error: isCustomerError,
    } = useGetCustomersQuery();
    const {
        data: ProductsData,
        isLoading: isProuctLoading,
        error: isProuctError,
    } = useGetProductsQuery();
    const [
        addSale,
        { data: addSaleRes, isLoading: addSaleLoading, error: addSaleError },
    ] = useAddSalesMutation();

    const customers = customersData?.customers ?? [];
    const products = ProductsData?.products ?? [];

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

    useEffect(() => {
        handleCost();
    }, [selectedProducts]);

    async function handleAddSale() {
        try {
            const result = await addSale(form).unwrap();

            if (!result.ok) {
                toast.error("خطا در ایجاد فروش");
                return;
            }

            toast.success("فروش ثبت شد");
            setForm({
                customer_id: null,
                items: [],
            });
            setSelectedCustomer(null);
            setSelectedProducts([]);
            return;
        } catch (error) {
            console.log(error);
            toast.error("error");
        }
    }

    const handleClear = () => {
        dispatch(salesSliceActions.resetForm());
        handleClose();
    };

    console.log(form);

    return (
        <>
            <Button
                endIcon={<AddRounded fontSize="small" />}
                variant="outlined"
                onClick={handleOpen}
            >
                فروش
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
                                    options={customers}
                                    filterOptions={filterOptions}
                                    getOptionLabel={(option) =>
                                        option.full_name
                                    }
                                    value={selectedCustomer}
                                    onChange={(event, newValue) => {
                                        setSelectedCustomer(newValue);
                                        setForm((prev) => ({
                                            ...prev,
                                            customer_id: newValue?.id ?? null,
                                        }));
                                    }}
                                    renderOption={(props, option) => (
                                        <li {...props} key={option.id}>
                                            <span>{option.full_name}</span> -
                                            <span>{option.phone_number}</span>
                                        </li>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="انتخاب کنید..."
                                        />
                                    )}
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
                                    value={selectedProducts}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option.id}>
                                                {option.name} -{" "}
                                                {option.sell_price.toLocaleString()}
                                            </li>
                                        );
                                    }}
                                    onChange={(event, newValue) => {
                                        setSelectedProducts((old) => newValue);
                                        setForm((prev) => ({
                                            ...prev,
                                            items: newValue.map((product) => ({
                                                product_id: Number(product.id),
                                                quantity: 1,
                                            })),
                                        }));
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
                                        value={cost}
                                    />
                                </div>
                            </div>
                        </form>
                    </Box>
                    <div className="flex gap-2 border-t border-gray-300 pt-4 ">
                        <Button onClick={handleAddSale} variant="contained">
                            ثبت فروش
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
