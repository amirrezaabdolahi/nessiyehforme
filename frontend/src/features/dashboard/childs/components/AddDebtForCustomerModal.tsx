"use client";
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
import { useAppDispatch } from "@/lib/redux/hooks";
import { toast } from "react-toastify";
import { ProductType } from "@/types/types";
import { ApiCustomer } from "../customers/api/ApiCustomer";
import { useGetProductsQuery } from "../products/api/ApiProduct";
import { useAddSalesMutation } from "../sales/api/ApiSales";
import { salesSliceActions } from "../debts/slices/debtsFormSlice";
import ModalContainer from "../../components/ModalContainer";
import { CustomerType } from "@/types/customerType";

const AddDebtForCustomerModal = ({ customer }: { customer: CustomerType }) => {
    const dispatch = useAppDispatch();

    const [form, setForm] = useState<{
        customer_id: number;
        items: Array<{ product_id: number; quantity: number }>;
        is_debt: boolean;
    }>({
        customer_id: customer.id,
        items: [],
        is_debt: true,
    });

    const [open, setOpen] = useState(false);

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
        data: ProductsData,
        isLoading: isProuctLoading,
        error: isProuctError,
    } = useGetProductsQuery();
    const [
        addSale,
        { data: addSaleRes, isLoading: addSaleLoading, error: addSaleError },
    ] = useAddSalesMutation();

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
                toast.error("خطا در ایجاد نسیه");
                return;
            }

            handleClose()
            dispatch(ApiCustomer.util.invalidateTags(["Credits", "Customer"]));
            toast.success("نسیه ثبت شد");
            setForm({
                customer_id: customer.id,
                items: [],
                is_debt: true,
            });
            setSelectedProducts([]);
            return;
        } catch (error) {
            console.log(error);
            toast.error(error.data.error || "error");
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
                size="small"
                variant="contained"
                onClick={handleOpen}
            >
                نسیه جدید
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
                        <Button
                            onClick={handleAddSale}
                            disabled={addSaleLoading}
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

export default AddDebtForCustomerModal;
