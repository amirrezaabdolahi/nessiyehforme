import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { productsShow } from "@/data/DashboardProducts";
import AddProductModal from "@/features/dashboard/components/AddProductModal";
import Product from "@/features/dashboard/components/Product";
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4">
                <Suspense
                    fallback={<ProductListLoading count={8} />}
                >
                    {/* <GetProducts /> */}
                </Suspense>
            </div>
        </Container>
    );
};

export default Products;

const ProductListLoading = ({ count }: { count: number }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse flex flex-col space-y-4 p-4 border border-gray-300 rounded-lg shadow"
                >
                    <div className="bg-gray-300 h-48 rounded-md w-full"></div>{" "}
                    {/* Placeholder Image */}
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>{" "}
                        {/* Title */}
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>{" "}
                        {/* Price or Category */}
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>{" "}
                        {/* Extra info */}
                    </div>
                </div>
            ))}
        </>
    );
};


