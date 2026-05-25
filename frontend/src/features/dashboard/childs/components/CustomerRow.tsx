"use client";
import { CustomerType } from "@/data/DashboardCustomers";
import { Avatar, Box, Button, Typography } from "@mui/material";

interface CustomerRowProps {
    customer: CustomerType;
}

const CustomerRow = ({ customer }: CustomerRowProps) => {
    return (
        <Box
            onClick={() => {
                console.log(customer);
            }}
            className="w-300
                                  xl:w-full
                                  sticky top-0
                                  z-50
                                  grid 
                                  grid-cols-8
                                  items-center
                                  justify-between
                                  p-4
                                  border-b
                                  border-gray-400
                                  hover:bg-gray-100
                                  transition-all
                                  cursor-pointer
                               "
        >
            <Box className="flex items-center gap-2">
                <Avatar alt={customer.username}>{customer.username[0]}</Avatar>
                <Typography variant="body2" className="text-start">
                    {customer.username}
                </Typography>
            </Box>
            <Typography variant="body2" className="text-start">
                {customer.phone}
            </Typography>
            <Typography variant="body2" className="text-start">
                {customer.totalCredit} ریال
            </Typography>
            <Typography variant="body2" className="text-start">
                {customer.paid} ریال
            </Typography>
            <Typography variant="body2" className="text-start">
                {customer.totalCredit - customer.paid} ریال
            </Typography>
            {customer.status === "active" ? (
                <Typography
                    className="bg-blue-400/10 text-blue-500 rounded-full  text-center w-max px-3"
                    variant="body2"
                >
                    باز
                </Typography>
            ) : customer.status === "overdue" ? (
                <Typography
                    className="bg-red-400/10 text-red-500 rounded-full  text-center w-max px-3"
                    variant="body2"
                >
                    نشده
                </Typography>
            ) : (
                <Typography
                    className="bg-green-400/10 text-green-500 rounded-full  text-center w-max px-3"
                    variant="body2"
                >
                    بسته
                </Typography>
            )}
            <Typography variant="body2" className="text-start">
                {customer.lastPayment}
            </Typography>
            <Button variant="text">پرداخت</Button>
        </Box>
    );
};

export default CustomerRow;
