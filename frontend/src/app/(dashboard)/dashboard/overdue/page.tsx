import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { overdueBranchs, OverdueReports } from "@/data/DashboardOverdue";
import BranchHead from "@/features/dashboard/components/BranchHead";
import { Box, Button, Typography } from "@mui/material";

const Overdues = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="اقساط سررسید گذشته"
                caption="7 تا نسیه که تاخیر دارن ، جمع مبالغ 43 م ریال"
            >
                <div className=""></div>
            </DashboardsPageHeader>
            <div className="w-full border border-red-500 rounded-lg px-4 p-2 bg-red-500/10">
                <Typography color="error" variant="body2">
                    سررسید هایی که تاریخ پرداخت آنها گذشته ، بر طبق مقدار مبلغ
                    مرتب شده است .
                </Typography>
            </div>
            <Box className="w-full overflow-x-scroll xl:overflow-auto">
                <BranchHead branches={overdueBranchs} />
                {OverdueReports.map((overdue) => (
                    <Box
                        key={overdue.id}
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
                            {overdue.customer}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {overdue.overdueDate}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {overdue.days} روز
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {overdue.overdueAmount} ریال
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {overdue.totalRemaining} ریال
                        </Typography>
                        <Box className="flex gap-2">
                            <Button variant="contained">پرداخت</Button>
                            <Button variant="outlined" color="error">
                                تماس
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default Overdues;
