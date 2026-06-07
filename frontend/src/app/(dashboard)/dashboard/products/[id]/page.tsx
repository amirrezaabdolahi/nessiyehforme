
import ProductDetailsPage from "@/features/dashboard/childs/products/components/ProductDetailsPage";

const Product = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    
    
    return (
        <ProductDetailsPage id={id} />
    );
};

export default Product;
