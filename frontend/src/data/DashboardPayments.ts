import { Payment } from "@/types/paymentTypes";

export const PaymentBranchName: Array<string> = [
    "شناسه",
    "مشتری",
    "مبلغ",
    "روش پرداخت",
    "تاریخ",
    "وضعیت",
]

export const payments: Payment[] = [
    {
        id: "1",
        customer: "علی محمدی",
        amount: 150000,
        method: "کارت",
        date: "1402/10/01",
        status: "success"
    },
    {
        id: "2",
        customer: "رضا علوی",
        amount: 50000,
        method: "نقد",
        date: "1402/10/02",
        status: "success"
    },
    {
        id: "3",
        customer: "سارا کریمی",
        amount: 320000,
        method: "درگاه",
        date: "1402/10/02",
        status: "faild"
    },
    {
        id: "4",
        customer: "محمد جوادی",
        amount: 120000,
        method: "کارت",
        date: "1402/10/03",
        status: "success"
    },
    {
        id: "5",
        customer: "زهرا حسینی",
        amount: 75000,
        method: "نقد",
        date: "1402/10/03",
        status: "success"
    },
    {
        id: "6",
        customer: "امیر نوری",
        amount: 900000,
        method: "درگاه",
        date: "1402/10/04",
        status: "success"
    },
    {
        id: "7",
        customer: "مینا رضایی",
        amount: 200000,
        method: "کارت",
        date: "1402/10/04",
        status: "faild"
    },
    {
        id: "8",
        customer: "کاوه احمدی",
        amount: 45000,
        method: "نقد",
        date: "1402/10/05",
        status: "success"
    },
    {
        id: "9",
        customer: "پریسا کمالی",
        amount: 600000,
        method: "درگاه",
        date: "1402/10/05",
        status: "success"
    },
    {
        id: "10",
        customer: "بهنام صادقی",
        amount: 180000,
        method: "کارت",
        date: "1402/10/06",
        status: "success"
    }
];