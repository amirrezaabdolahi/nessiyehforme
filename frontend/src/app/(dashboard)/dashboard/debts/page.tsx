import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { CreditBranchName, Credits } from "@/data/DashboardCredits";
import BranchHead from "@/features/dashboard/components/BranchHead";
import PagesFilterLinks from "@/features/dashboard/components/PagesFilterLinks";
import DebtsCreaditsRows from "@/features/dashboard/childs/debts/components/DebtsCreaditsRows";
import { Box } from "@mui/material";
import AddSaleModal from "@/features/dashboard/components/AddSaleModal";

const Orders = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="حساب ها"
                caption="128 حساب ، 180000000 ریال جمع حساب ها"
            >
                <AddSaleModal />
            </DashboardsPageHeader>
            <Box className="w-full overflow-x-scroll xl:overflow-auto">
                <PagesFilterLinks page="debts" />
                <BranchHead branches={CreditBranchName} />
                {Credits.map((credit) => (
                    <DebtsCreaditsRows key={credit.id} credit={credit} />
                ))}
            </Box>
        </Container>
    );
};

export default Orders;
