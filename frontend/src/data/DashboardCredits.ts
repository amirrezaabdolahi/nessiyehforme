import { SaleType } from "./DashboardSale"


export const DebtsBranchName: Array<string> = [
    "شناسه",
    "مشتری",
    "توضیحات",
    "جمع",
    "پرداخت",
    "مانده",
    "تاریخ",
    "وضعیت"
]

export type DebtType = {
    id: number,
    customer: number,
    customer_name: string,
    customer_phone: string,
    sale: number,
    amount: number,
    paid_amount: number,
    remaining: number,
    is_paid: boolean,
    items: {
        id: number;
        product_id: number;
        product_name: string;
        quantity: number;
        price: number;
    }[];
    description: string,
    created_at: string,
    status: "active" | "overdue" | "settled"
}
