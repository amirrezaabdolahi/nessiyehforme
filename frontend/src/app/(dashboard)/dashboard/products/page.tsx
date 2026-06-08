import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { productsShow } from "@/data/DashboardProducts";
import AddProductModal from "@/features/dashboard/components/AddProductModal";
import ProductsSearch from "@/features/dashboard/childs/products/components/ProductsSearch";
import { Suspense } from "react";
import GetProducts from "@/features/dashboard/childs/products/components/Products";

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Products = async ({ searchParams }: Props) => {
    const querys = await searchParams;

    return (
        <Container>
            <DashboardsPageHeader title="حساب ها" caption="200 محصول">
                <AddProductModal />
            </DashboardsPageHeader>
            <ProductsSearch />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-4">
                <GetProducts />
            </div>
        </Container>
    );
};

export default Products;

