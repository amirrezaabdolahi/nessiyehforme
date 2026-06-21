"use client";
import { DebtType } from "@/data/DashboardCredits";
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

interface CustomerDetailsDebtsPropsType {
    debt: DebtType;
}

const CustomerDetailsDebts = ({ debt }: CustomerDetailsDebtsPropsType) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls={`${debt.id}-panel1-content`}
                id={`${debt.id}-panel1-header`}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    width="100%"
                >
                    {debt.is_paid ? (
                        <CheckRounded color="success" />
                    ) : (
                        <ClearRounded color="error" />
                    )}
                    <Typography variant="body2">
                        جمع : {debt.amount.toLocaleString()}
                    </Typography>
                    <Typography variant="body2">
                        مبلغ داده شده : {debt.paid_amount.toLocaleString()}
                    </Typography>
                    <Typography
                        variant="body2"
                        color={debt.remaining > 0 ? "error" : "success"}
                    >
                        مانده : {debt.remaining.toLocaleString()}
                    </Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={1}>
                    {debt.items.map((item) => (
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
                                    {item.quantity.toLocaleString("fa")} ×{" "}
                                    {item.price.toLocaleString("fa")}
                                </Typography>

                                <Typography variant="body2" fontWeight={700}>
                                    {(
                                        item.quantity * item.price
                                    ).toLocaleString("fa")}
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
                            {debt.amount.toLocaleString("fa")}
                        </Typography>
                    </Stack>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomerDetailsDebts;
