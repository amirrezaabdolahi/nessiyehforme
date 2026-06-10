import { CustomersUsernameAndId } from "@/data/AutoCompletesData";
import { ProductType } from "./productTypes";
import { formPayMethod, MetodsType } from "./methods";
import { BranchMap, categories, Category } from "@/utils/filteringData";




export interface DebtModalFormType {
    customer?: CustomersUsernameAndId | null,
    products?: ProductType[] | [],
    price?: string | number,
    date?: string,
    period?: { id: number, name: string, value: string } | null,
    description?: string
}



export interface PaymentModalFormType {
    customer?: CustomersUsernameAndId | null,
    debts?: CustomersUsernameAndId | null,
    price?: string | number,
    method: formPayMethod | null,
    date?: string,
    description?: string
}


export interface CustomerModalFormType {
    phone_number: string | number,
}

export interface ProductModalFormType {
    name: string,
    barcode: string | number,
    buy_price: string | number,
    sell_price: string | number,
    exp_date: string | number,
    category: Category | null,
    description?: string
    stock?: number,
}