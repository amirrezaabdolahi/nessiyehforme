import Container from "@/components/dash/Container";
import CustomerPageHeader from "@/features/dashboard/components/CustomerPageHeader";
import CustomersPage from "@/features/dashboard/childs/components/CustomersPage";
import GetCustomer from "@/features/dashboard/hooks/GetCustomer";

interface customerProps {
    params: Promise<{
        id: string;
    }>;
}

const Customer = async ({ params }: customerProps) => {
    const { id } = await params;

    const { customer, payeds } = GetCustomer(id);

    if (!customer) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                هیچ مشتری با این شناسه پیدا نشد
            </div>
        );
    }

    return (
        <Container>
            <CustomerPageHeader />
            <CustomersPage customer={customer} payeds={payeds} />
        </Container>
    );
};

export default Customer;
