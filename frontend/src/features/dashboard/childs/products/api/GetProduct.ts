import { products } from '@/data/DashboardProducts'
import { ProductType } from '@/types/productTypes';

type GetProductProps = {
    id: string | number;
}

const GetProduct = ({ id }: GetProductProps) => {
    const product: ProductType | null = products.find(p => p.id === id);

    return product;
}

export default GetProduct;