export interface DebtType {
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

export interface SaleType {
    id: number,
    shop: number,
    customer: number,
    customer_name: string,
    items: {
        id: number,
        product_id: number,
        product_name: string,
        quantity: number,
        price: number
    }[],
    total: number,
}

export type ProductType = {
    id: string;
    name: string;
    barcode?: string;
    buy_price: number;
    sell_price: number;
    exp_date?: string;
    image?: string;
    category: string;
    stock: number;
    description?: string;
}