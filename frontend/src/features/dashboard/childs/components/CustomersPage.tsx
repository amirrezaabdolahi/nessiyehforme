"use client";
import { AddRounded } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import CustomersPayeds from "./CustomersPayeds";
import { useGetCustomerCreditsQuery } from "../customers/api/ApiCustomer";
import Container from "@/components/dash/Container";
import DebtsCreaditsRows from "../debts/components/DebtsCreaditsRows";
import SaleRow from "../sales/components/SaleRow";

const CustomersPage = ({ id }: { id: string }) => {
    const { data, isLoading, error, isSuccess } =
        useGetCustomerCreditsQuery(id);

    const customer = isSuccess ? data.customer : null;
    const sales = isSuccess ? data.sales : [];
    const debts = isSuccess ? data.debts : [];

    if (isLoading) {
        return (
            <Container>
                <div className="w-full h-screen flex items-center justify-center">
                    <Typography variant="h6">در حال بارگذاری...</Typography>
                </div>
            </Container>
        );
    }

    if (!customer) {
        return (
            <Container>
                <div className="w-full h-screen flex items-center justify-center">
                    <Typography variant="h6">مشتری یافت نشد</Typography>
                </div>
            </Container>
        );
    }

    return (
        <>
            <Card className="flex flex-wrap items-center justify-center md:justify-between p-6 rounded-lg!">
                <Box className="flex items-center gap-4">
                    <Avatar
                        alt={customer.full_name}
                        variant="rounded"
                        className="w-20! h-20! rounded-lg!"
                    >
                        {customer.full_name[0]}
                    </Avatar>
                    <Box className="flex flex-col ">
                        <Typography variant="h5" className="font-bold!">
                            {customer.full_name}
                        </Typography>
                        <Box className="flex gap-2">
                            <Typography variant="body2">
                                {customer.phone_number}
                            </Typography>
                            <Typography variant="body2">.</Typography>
                            {customer.status === "active" ? (
                                <Typography
                                    className="bg-blue-400/10 text-blue-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    فعال
                                </Typography>
                            ) : customer.status === "overdue" ? (
                                <Typography
                                    className="bg-red-400/10 text-red-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    غیر فعال
                                </Typography>
                            ) : (
                                <Typography
                                    className="bg-green-400/10 text-green-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    عالی
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box className="flex gap-4">
                    <Box className="flex flex-col gap-0 items-center">
                        <Typography variant="h6" color="warning">
                            {customer.totalCredit - customer.paid} ریال
                        </Typography>
                        <Typography variant="caption">باقی مانده</Typography>
                    </Box>
                    <Box className="flex flex-col gap-0 items-center">
                        <Typography variant="h6" color="success">
                            {customer.paid} ریال
                        </Typography>
                        <Typography variant="caption">حساب شده</Typography>
                    </Box>
                </Box>
            </Card>
            <Box>
                <Card
                    className="flex flex-col p-4 border-b border-gray-400"
                    sx={{
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                    }}
                >
                    <Box className="flex items-center justify-between">
                        <Typography variant="h6" className="font-bold!">
                            جدول اقساط
                        </Typography>
                        <Button
                            size="small"
                            variant="contained"
                            endIcon={<AddRounded />}
                        >
                            نسیه جدید
                        </Button>
                    </Box>
                </Card>
                <Card
                    className="flex flex-col px-4 "
                    sx={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                >
                    {debts?.map((debt) => (
                        <DebtsCreaditsRows key={debt.id} debt={debt} />
                    ))}
                </Card>
                <Card
                    className="flex flex-col p-4 border-b border-gray-400"
                    sx={{
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                    }}
                >
                    <Box className="flex items-center justify-between">
                        <Typography variant="h6" className="font-bold!">
                            جدول فروش ها
                        </Typography>
                        <Button
                            size="small"
                            variant="contained"
                            endIcon={<AddRounded />}
                        >
                            فروش جدید
                        </Button>
                    </Box>
                </Card>
                <Card
                    className="flex flex-col px-4 "
                    sx={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                >
                    {sales?.map((sale) => (
                        <SaleRow key={sale.id} sale={sale} />
                    ))}
                </Card>
            </Box>
        </>
    );
};

export default CustomersPage;
