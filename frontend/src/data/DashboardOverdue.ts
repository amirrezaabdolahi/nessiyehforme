import { overdueType } from "@/types/overdueTypes";

export const overdueBranchs : Array<string> = [
    "مشتری",
    "شروع تاخیر",
    "روز",
    "مقدار",
    "جمع حساب",
    "",
]

export const OverdueReports: overdueType[] = [
    {
        id: "ovr-101",
        customer: "رضا کریمی",
        overdueDate: "1403/02/10",
        days: 5,
        overdueAmount: 5_000_000,
        totalRemaining: 6_000_000
    },
    {
        id: "ovr-102",
        customer: "سارا محمدی",
        overdueDate: "1403/01/20",
        days: 25,
        overdueAmount: 12_000_000,
        totalRemaining: 15_500_000
    },
    {
        id: "ovr-103",
        customer: "علی علوی",
        overdueDate: "1403/02/12",
        days: 3,
        overdueAmount: 1_200_000,
        totalRemaining: 1_200_000
    },
    {
        id: "ovr-104",
        customer: "شرکت کاسپین",
        overdueDate: "1402/12/05",
        days: 100,
        overdueAmount: 50_000_000,
        totalRemaining: 85_000_000
    },
    {
        id: "ovr-105",
        customer: "زهرا پناهی",
        overdueDate: "1403/02/08",
        days: 7,
        overdueAmount: 3_500_000,
        totalRemaining: 10_000_000
    }
];