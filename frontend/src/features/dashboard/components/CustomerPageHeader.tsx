import { ArrowBackRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import AddPaymentModal from "./AddPaymentModal";
import AddCreditModal from "./AddCreditModal";

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
                <AddCreditModal />
                <AddPaymentModal />
            </Box>
        </div>
    );
};

export default CustomerPageHeader;
