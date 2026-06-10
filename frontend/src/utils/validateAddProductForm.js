import { z } from "zod";

export const validateAddProductForm = z.object({
    name: z.string().min(1, "نام محصول را وارد کنید"),
    barcode: z.string().min(1, "بارکد را وارد کنید").optional(),
    buy_price: z.number().min(1, "قیمت خرید باید بزرگتر از صفر باشد"),
    sell_price: z.number().min(1, "قیمت فروش باید بزرگتر از صفر باشد"),
    stock: z.number().min(0, "موجودی باید بزرگتر از صفر باشد").optional(),
    exp_date: z.string().optional(),
    // category: z
    //     .object({
    //         id: z.number(),
    //         name: z.string(),
    //     })
    //     .optional(),
    description: z.string().optional(),
});
