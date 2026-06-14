

export const SaleBranchName: Array<string> = [
    "شناسه",
    "مشتری",
    "جمع",
    "تاریخ",
    "نوع",
    "وضعیت"
]

export type SaleType = {
    id: number;
    shop: number;
    customer: number;
    customer_name: string;
    is_debt : boolean,
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
