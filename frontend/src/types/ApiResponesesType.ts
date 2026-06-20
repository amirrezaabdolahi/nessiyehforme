import { DebtType, ProductType, SaleType } from "./types"


export interface GetSalesResponesType {
    ok: boolean,
    sales: Array<SaleType>
}

export interface PostSalesType {
    customer_id: number | null,
    items: { product_id: number, quantity: number }[]
}

export interface GetDebtsResponeseType {
    ok: boolean,
    debts: DebtType[]
}

export interface GetProductsResponse {
    ok: boolean,
    products: ProductType[]
}
export interface GetProductResponse {
    ok: boolean,
    product: ProductType
}