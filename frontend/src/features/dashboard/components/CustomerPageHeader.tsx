import { ArrowBackRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import AddPaymentModal from "./AddPaymentModal";
import AddSaleModal from "./AddSaleModal";

const CustomerPageHeader = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <Link href={"/dashboard/customers"}>
                <Button
                    size="small"
                    startIcon={<ArrowForwardIosRounded fontSize="small" />}
                    variant="outlined"
                >
                    برگشت
                </Button>
            </Link>
            <Box className="flex gap-2">
                <AddSaleModal />
                <AddPaymentModal />
            </Box>
        </div>
    );
};

export default CustomerPageHeader;
