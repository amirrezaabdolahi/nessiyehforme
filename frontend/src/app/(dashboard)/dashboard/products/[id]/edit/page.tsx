import ProductDetailsEditPage from "@/features/dashboard/childs/products/components/ProductDetailsEditPage";

const ProductEdit = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    return <ProductDetailsEditPage id={id} />;
};

export default ProductEdit;
