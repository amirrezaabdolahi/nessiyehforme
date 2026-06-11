import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { CreditBranchName } from "@/data/DashboardCredits";
import BranchHead from "@/features/dashboard/components/BranchHead";
import PagesFilterLinks from "@/features/dashboard/components/PagesFilterLinks";
import { Box } from "@mui/material";
import SalesList from "@/features/dashboard/childs/sales/components/SalesList";
import AddSaleModal from "@/features/dashboard/components/AddSaleModal";

const Sales = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="فروش ها"
                caption="128 حساب ، 180000000 ریال جمع حساب ها"
            >
                <AddSaleModal />
            </DashboardsPageHeader>
            <Box className="w-full overflow-x-scroll xl:overflow-auto">
                <PagesFilterLinks page="sales" />
                <BranchHead branches={CreditBranchName} />
                <SalesList />
            </Box>
        </Container>
    );
};

export default Sales;
