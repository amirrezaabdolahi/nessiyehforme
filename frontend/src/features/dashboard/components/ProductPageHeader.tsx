"use client";
import {
    AddRounded,
    ArrowForwardIosRounded,
    DeleteRounded,
    EditRounded,
} from "@mui/icons-material";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import { useDeleteProductMutation } from "../childs/products/api/ApiProduct";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProductPageHeader = ({ id }: { id: string | number }) => {
    const [deleteProduct, { data, isLoading, error }] =
        useDeleteProductMutation();
    const router = useRouter();

    return (
        <div className="w-full flex items-center justify-between">
            <Link href={"/dashboard/products"}>
                <Button
                    size="small"
                    startIcon={<ArrowForwardIosRounded fontSize="small" />}
                    variant="outlined"
                >
                    برگشت
                </Button>
            </Link>
            <Box className="flex gap-2">
                <Tooltip title="حذف محصول" arrow leaveDelay={500}>
                    <IconButton
                        color="error"
                        onClick={() => {
                            deleteProduct(id).unwrap();
                            if (error) {
                                toast.error(
                                    "مشکلی پیش آمده لطفا بعدا امتحان کنید",
                                );
                            } else {
                                router.push("/dashboard/products");
                            }
                        }}
                    >
                        <DeleteRounded />
                    </IconButton>
                </Tooltip>
                <Tooltip title="ویرایش محصول" arrow leaveDelay={500}>
                    <Link href={`${id}/edit`}>
                        <IconButton color="primary">
                            <EditRounded />
                        </IconButton>
                    </Link>
                </Tooltip>
                <Button endIcon={<AddRounded />} variant="contained">
                    تعداد
                </Button>
            </Box>
        </div>
    );
};

export default ProductPageHeader;
