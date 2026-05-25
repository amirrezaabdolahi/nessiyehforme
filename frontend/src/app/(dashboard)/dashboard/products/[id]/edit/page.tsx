import BranchSelect from "@/components/dash/BranchSelectField";
import CategorySelect from "@/components/dash/CategorySelectField";
import Container from "@/components/dash/Container";
import SelectUnitField from "@/features/dashboard/components/SelectUnitField";
import GetProduct from "@/features/dashboard/childs/products/api/GetProduct";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProductEdit = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    const product = await GetProduct({ id });

    if (!product) {
        notFound();
    }

    return (
        <Container>
            <div className="w-full flex items-center justify-between">
                <Link href={`/dashboard/products/${id}`}>
                    <Button
                        size="small"
                        startIcon={<ArrowForwardIosRounded fontSize="small" />}
                        variant="outlined"
                    >
                        برگشت
                    </Button>
                </Link>
            </div>
            <div className="flex w-full items-center justify-center flex-wrap gap-4">
                <Card className="flex flex-col gap-4 p-4">
                    <TextField
                        value={product.name}
                        size="small"
                        label="نام محصول"
                        fullWidth
                    />
                    <TextField
                        value={product.sku}
                        size="small"
                        label="بارکد"
                        fullWidth
                    />
                    <div className="flex gap-2 w-full">
                        <TextField
                            value={product.buy_price}
                            size="small"
                            label="قیمت خرید"
                        />
                        <TextField
                            value={product.sell_price}
                            size="small"
                            label="قیمت فروش"
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <TextField
                            value={product.man_date}
                            size="small"
                            label="تاریخ تولید"
                        />
                        <TextField
                            value={product.exp_date}
                            size="small"
                            label="تاریخ انقضا"
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <CategorySelect />
                        <BranchSelect />
                    </div>
                    <div className="flex gap-2 w-full">
                        <SelectUnitField />
                        <TextField
                            value={product.qty}
                            size="small"
                            label="تعداد"
                            fullWidth
                        />
                    </div>
                    <TextField
                        value={product.description}
                        multiline
                        rows={3}
                        size="small"
                        label="توضیحات"
                        fullWidth
                    />

                    <Button size="small" variant={"contained"}>
                        ذخیره
                    </Button>
                </Card>
                <Avatar variant="rounded" className="w-70! h-90!" alt={"amir"}>
                    {"a"}
                </Avatar>
            </div>
        </Container>
    );
};

export default ProductEdit;
