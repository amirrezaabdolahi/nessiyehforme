"use client";
import { CreditType } from "@/data/DashboardCredits";
import { SaleType } from "@/data/DashboardSale";
import { Box, Typography } from "@mui/material";

interface SaleRowPropType {
    sale: SaleType;
}

const SaleRow = ({ sale }: SaleRowPropType) => {
    return (
        <Box
            onClick={() => {
                console.log(sale);
            }}
            className="w-300
                                  xl:w-full
                                  sticky top-0
                                  z-50
                                  grid 
                                  grid-cols-6
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
            <Typography variant="body2" className="text-start">
                {sale.id}
            </Typography>
            <Typography variant="body2" className="text-start">
                {sale.customer_name || "ناشناس"}
            </Typography>
            {/* <Typography variant="body2" className="text-start">
                {sale.description}
            </Typography> */}
            <Typography variant="body2" className="text-start">
                {sale.total} ریال
            </Typography>
            {/* <Typography variant="body2" className="text-start">
                {sale.paid || "-"} 
            </Typography> */}
            {/* <Typography variant="body2" className="text-start">
                {sale.total - sale.paid} ریال
            </Typography> */}
            <Typography variant="body2" className="text-start">
                {sale.created_at}
            </Typography>
            <Typography variant="body2" className="text-start">
                {sale.is_debt ? (
                    <Typography
                        className="bg-blue-400/10 text-blue-500 rounded-full  text-center w-max px-3"
                        variant="body2"
                    >
                        نسیه
                    </Typography>
                ) : (
                    <Typography
                        className="bg-green-400/10 text-green-500 rounded-full  text-center w-max px-3"
                        variant="body2"
                    >
                        نقدی
                    </Typography>
                )}
            </Typography>
            {sale.status === "active" ? (
                <Typography
                    className="bg-blue-400/10 text-blue-500 rounded-full  text-center w-max px-3"
                    variant="body2"
                >
                    باز
                </Typography>
            ) : sale.status === "overdue" ? (
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
        </Box>
    );
};

export default SaleRow;
