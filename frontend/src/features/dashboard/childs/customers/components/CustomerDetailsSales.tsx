"use client";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import {
    CheckRounded,
    ClearRounded,
    ExpandMoreRounded,
} from "@mui/icons-material";
import React from "react";
import { SaleType } from "@/data/DashboardSale";

interface CustomerDetailsSalesPropsType {
    sale: SaleType;
}

const CustomerDetailsSales = ({ sale }: CustomerDetailsSalesPropsType) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls={`${sale.id}-panel1-content`}
                id={`${sale.id}-panel1-header`}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    width="100%"
                >
                    <Typography variant="body2">
                        جمع : {sale.total.toLocaleString()}
                    </Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={1}>
                    {sale.items.map((item) => (
                        <div key={item.id}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography variant="body2">
                                    {item.product_name}
                                </Typography>

                                <Typography variant="body2">
                                    {item.quantity} ×{" "}
                                    {item.price.toLocaleString()}
                                </Typography>

                                <Typography variant="body2" fontWeight={700}>
                                    {(
                                        item.quantity * item.price
                                    ).toLocaleString()}
                                </Typography>
                            </Stack>

                            <Divider sx={{ mt: 1 }} />
                        </div>
                    ))}

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        mt={2}
                    >
                        <Typography fontWeight={700}>جمع کل</Typography>

                        <Typography fontWeight={700}>
                            {sale.total.toLocaleString()}
                        </Typography>
                    </Stack>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomerDetailsSales;
