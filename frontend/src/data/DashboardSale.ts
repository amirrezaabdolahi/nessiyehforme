

export const SaleBranchName: Array<string> = [
    "شناسه",
    "مشتری",
    "توضیحات",
    "جمع",
    "پرداخت",
    "مانده",
    "تاریخ",
    "وضعیت"
]

export type SaleType = {
    id: number;
    shop: number;
    customer: number;
    customer_name: string;
    items: {
        id: number;
        product_id: number;
        product_name: string;
        quantity: number;
        price: number;
    }[];
    total: number;
    created_at: string
}
