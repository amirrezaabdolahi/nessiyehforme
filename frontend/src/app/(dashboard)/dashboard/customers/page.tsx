
import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { Customers, CustomersBranchName } from "@/data/DashboardCustomers";
import AddCustomerModal from "@/features/dashboard/components/AddCustomerModal";
import BranchHead from "@/features/dashboard/components/BranchHead";
import PagesFilterLinks from "@/features/dashboard/components/PagesFilterLinks";
import CustomerRow from "@/features/dashboard/childs/components/CustomerRow";
import { Box } from "@mui/material";
import Link from "next/link";

const DashboardCustomers = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="مشتری ها"
                caption="247 مشتری ثبت نام کرده ، 6 نا مشتری این ماه"
            >
                <AddCustomerModal />
            </DashboardsPageHeader>

            <Box className="w-full overflow-x-scroll xl:overflow-auto">
                <PagesFilterLinks page="customers" />
                {/* branches */}
                <BranchHead branches={CustomersBranchName} />
                {Customers.map((customer) => (
                    <Link href={`customers/${customer.id}`} key={customer.id}>
                        <CustomerRow customer={customer} />
                    </Link>
                ))}
            </Box>
        </Container>
    );
};

export default DashboardCustomers;
