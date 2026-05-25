export type ProductType = {
    id: string;
    sku?: string;          // کد اختصاصی محصول (بارکد داخلی)
    name: string;
    description?: string;  // توضیحات کوتاه
    buy_price: number;
    sell_price: number;
    man_date?: string;
    exp_date?: string;
    image?: string;
    category: string;      // مثلاً: خوراکی، لبنیات
    branch?: string;       // مثلاً: چیپس، ماست
    unit: UnitTypes;          // واحد شمارش: عدد، کیلو، بسته
    qty: number;           // مقدار موجودی
    min_stock?: number;    // حداقل موجودی برای هشدار (مثلاً اگر کمتر از ۵ شد هشدار بده)
} | undefined

export type ProductShowType = {
    id: string;
    sku?: string;          // کد اختصاصی محصول (بارکد داخلی)
    name: string;
    sell_price: number;
    man_date?: string;
    exp_date?: string;
    image?: string;
    category: string;      // مثلاً: خوراکی، لبنیات
    qty: number;           // مقدار موجودی
    unit: UnitTypes;          // واحد شمارش: عدد، کیلو، بسته
}

export type UnitTypes = "عدد" | "کیلو" | "بسته" | "بطری" | "قوطی" | "گالن"