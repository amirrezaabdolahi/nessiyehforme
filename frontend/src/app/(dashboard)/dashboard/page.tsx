import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import AddCreditModal from "@/features/dashboard/components/AddCreditModal";
import AddPaymentModal from "@/features/dashboard/components/AddPaymentModal";
import DashboardsCards from "@/features/dashboard/childs/dashboard/components/DashboardsCards";
import DashboardsCharts from "@/features/dashboard/childs/dashboard/components/DashboardsCharts";
import DashboardsRecents from "@/features/dashboard/childs/dashboard/components/DashboardsRecents";
import { formatedTodayDate } from "@/utils/date";
import { CheckAuthServer } from "@/utils/auth/CheckAuth";

const Dashboard = async () => {
    await CheckAuthServer();

    return (
        <Container>
            <DashboardsPageHeader
                title="روز خوش ، امیررضا"
                caption={` ارومیه نگین ،${formatedTodayDate()}`}
            >
                <AddCreditModal />
                <AddPaymentModal />
            </DashboardsPageHeader>
            <DashboardsCards />

            <div className="grid grid-cols-1 lg:grid-cols-6  gap-4 h-full">
                <DashboardsCharts />
                <DashboardsRecents />
            </div>
        </Container>
    );
};

export default Dashboard;
