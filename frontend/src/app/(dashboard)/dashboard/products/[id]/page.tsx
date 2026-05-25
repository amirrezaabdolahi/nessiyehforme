import Container from "@/components/dash/Container";
import CopyButtonSku from "@/features/dashboard/components/CopyButtonSku";
import ProductPageHeader from "@/features/dashboard/components/ProductPageHeader";
import GetProduct from "@/features/dashboard/childs/products/api/GetProduct";
import { Avatar, Button, Card, Typography } from "@mui/material";

const Product = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    const product = await GetProduct({ id: id });
    const formatter = new Intl.NumberFormat("fa-IR", {
        style: "currency",
        currency: "IRR",
    });
    const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    console.log(product);

    if (!product) {
        return (
            <Container>
                <div className="w-full h-screen flex items-center justify-center">
                    <Typography variant="h6">محصول یافت نشد</Typography>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <ProductPageHeader id={id} />
            <Card className="p-4 flex items-center justify-center md:justify-between flex-wrap gap-4">
                <div className="flex flex-col md:items-start items-center gap-2">
                    <div className="flex items-center gap-4">
                        <Typography variant="h6">{product.name}</Typography>
                        {product.sku && <CopyButtonSku text={product.sku} />}
                    </div>
                    <Typography variant="caption">
                        {product.description}
                    </Typography>
                    <div className="">
                        <Typography variant="h6">
                            قیمت خرید : {formatter.format(product.buy_price)}
                        </Typography>
                        <Typography variant="h6">
                            قیمت فروش : {formatter.format(product.sell_price)}
                        </Typography>
                    </div>
                    <div className="">
                        <Typography variant="body1">
                            {product.man_date} - {product.exp_date}
                        </Typography>
                    </div>
                    <div className="">
                        <Typography variant="body1">
                            دسته بندی : {product.category}
                        </Typography>
                        <Typography variant="body1">
                            شاخه : {product.branch}
                        </Typography>
                        <Typography variant="body1">
                            نوع شمارش : {product.unit}
                        </Typography>
                    </div>
                    <div className="">
                        <Typography variant="h6">
                            موجودی : {product.qty}
                        </Typography>
                    </div>
                </div>
                <Avatar
                    variant="rounded"
                    className="w-70! h-90!"
                    alt={product.name}
                >
                    {product.name[0]}
                </Avatar>
            </Card>
        </Container>
    );
};

export default Product;
