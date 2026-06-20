

export type ProductShowType = {
    id: string;
    barcode?: string;
    name: string;
    sell_price: number;
    exp_date?: string;
    image?: string;
    category: string;
    stock: number;
}

// export type UnitTypes = "عدد" | "کیلو" | "بسته" | "بطری" | "قوطی" | "گالن"