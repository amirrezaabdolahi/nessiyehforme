"use client";
import { CreditType } from "@/data/DashboardCredits";
import { Box, Typography } from "@mui/material";

interface DebtsCreditsRowsProps {
    credit: CreditType;
}

const DebtsCreaditsRows = ({ credit }: DebtsCreditsRowsProps) => {
    return (
        <Box
            onClick={() => {
                console.log(credit);
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
            <Typography variant="body2" className="text-start">
                {credit.id}
            </Typography>
            <Typography variant="body2" className="text-start">
                {credit.customer}
            </Typography>
            <Typography variant="body2" className="text-start">
                {credit.description}
            </Typography>
            <Typography variant="body2" className="text-start">
                {credit.total} ریال
            </Typography>
            <Typography variant="body2" className="text-start">
                {credit.paid} ریال
            </Typography>
            <Typography variant="body2" className="text-start">
                {credit.total - credit.paid} ریال
            </Typography>
            <Typography variant="body2" className="text-start">
                {credit.date}
            </Typography>
            {credit.status === "active" ? (
                <Typography
                    className="bg-blue-400/10 text-blue-500 rounded-full  text-center w-max px-3"
                    variant="body2"
                >
                    باز
                </Typography>
            ) : credit.status === "overdue" ? (
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

export default DebtsCreaditsRows;
