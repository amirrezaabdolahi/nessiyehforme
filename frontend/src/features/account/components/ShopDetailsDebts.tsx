import { DebtType } from "@/data/DashboardCredits";
import { ExpandMoreRounded } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    Chip,
    Divider,
    Typography,
} from "@mui/material";

interface ShopDetailsDebtsPropsType {
    debt: DebtType;
}
const ShopDetailsDebts = ({ debt }: ShopDetailsDebtsPropsType) => {
    return (
        <Card className="rounded-xl! p-4! flex flex-col " sx={{ gap: 2 }}>
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col">
                    <Typography variant="caption">فاکتور</Typography>
                    <Typography variant="h6" className="font-bold!">
                        {debt.id}
                    </Typography>
                </div>
                {debt.is_paid ? (
                    <Chip
                        label="پرداخت شده"
                        color="success"
                        variant="outlined"
                    />
                ) : (
                    <Chip
                        label="پرداخت نشده"
                        color="error"
                        variant="outlined"
                    />
                )}
            </div>

            <div className="flex w-full items-center justify-between">
                <div className="flex-1">
                    <Typography variant="caption">قیمت کل</Typography>
                    <Typography variant="body1" className="font-bold!">
                        {debt.amount}
                    </Typography>
                </div>
                <div className="flex-1">
                    <Typography variant="caption">پرداخت شده</Typography>
                    <Typography
                        variant="body1"
                        className="font-bold!"
                        color="success"
                    >
                        {debt.paid_amount} تومان
                    </Typography>
                </div>
                <div className="flex-1">
                    <Typography variant="caption">مانده</Typography>
                    <Typography
                        variant="body1"
                        className="font-bold!"
                        color="error"
                    >
                        {debt.remaining} تومان
                    </Typography>
                </div>
            </div>

            <div className="w-full flex items-center justify-between">
                <Typography variant="caption">
                    تاریخ : {debt.created_at}
                </Typography>
                <Typography variant="body2">100% پرداخت شده</Typography>
            </div>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreRounded color="primary" />}
                    aria-controls={`${debt.id}-panel1-content`}
                    id={`${debt.id}-panel1-header`}
                >
                    <Typography component="span" color="primary">
                        مشاهده جزئیات
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Divider variant="fullWidth" />

                    <p className="text-sm text-gray-500">اقلام خریداری شده</p>

                    {debt.items.map((product) => (
                        <>
                            <div className="flex w-full items-center justify-between">
                                <div className="flex-col flex ">
                                    <Typography
                                        variant="body1"
                                        className="font-bold!"
                                    >
                                        {product.product_name}
                                    </Typography>
                                    <Typography variant="caption">
                                        تعداد : {product.quantity}
                                    </Typography>
                                </div>
                                <Typography variant="body1" color="primary">
                                    {product.price} تومان
                                </Typography>
                            </div>
                            <Divider />
                        </>
                    ))}
                </AccordionDetails>
            </Accordion>
        </Card>
    );
};

export default ShopDetailsDebts;
