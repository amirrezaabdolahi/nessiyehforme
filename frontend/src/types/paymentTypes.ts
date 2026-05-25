import { MetodsType } from "./methods";

export interface Payment {
    id: string;
    customer: string;
    amount: number;
    method: MetodsType;
    date: string;
    status: "success" | "faild";
}