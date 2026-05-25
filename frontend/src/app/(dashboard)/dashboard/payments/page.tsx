import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { PaymentBranchName, payments } from "@/data/DashboardPayments";
import AddPaymentModal from "@/features/dashboard/components/AddPaymentModal";
import BranchHead from "@/features/dashboard/components/BranchHead";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Payments = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="پرداختی ها"
                caption="42 م ریال مبلغ جمع شده این ماه"
            >
                <AddPaymentModal />
            </DashboardsPageHeader>

            <Box className="w-full overflow-x-scroll xl:overflow-auto">
                <BranchHead branches={PaymentBranchName} />
                {payments.map((payment) => (
                    <Box
                        key={payment.id}
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
                            {payment.id}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {payment.customer}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {payment.amount}
                        </Typography>

                        <Typography variant="body2" className="text-start">
                            {payment.method}
                        </Typography>

                        <Typography variant="body2" className="text-start">
                            {payment.date}
                        </Typography>
                        {payment.status === "success" ? (
                            <Typography
                                className="bg-green-400/10 text-green-500 rounded-full  text-center w-max px-3"
                                variant="body2"
                            >
                                موفق
                            </Typography>
                        ) : (
                            <Typography
                                className="bg-red-400/10 text-red-500 rounded-full  text-center w-max px-3"
                                variant="body2"
                            >
                                ناموفق
                            </Typography>
                        )}
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default Payments;
