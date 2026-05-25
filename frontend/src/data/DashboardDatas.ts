import { ChangeType, MuiColors } from "@/types/handiTypes";


export interface DashboardCardData {
    id: string;
    title: string;
    value: number;
    unit?: string;
    change: number;
    changeType: ChangeType;
    period: string;
    color: MuiColors;
}

export const dashboardCards: DashboardCardData[] = [
    {
        id: "totalOutstanding",
        title: "مجموع مطالبات",
        value: 184.2,
        unit: "م ریال",
        change: 12.4,
        changeType: "increase" as ChangeType,
        period: "این ماه",
        color: "primary",
    },
    {
        id: "overdueAmount",
        title: "مبلغ سررسید گذشته",
        value: 28.4,
        unit: "م ریال",
        change: 3,
        changeType: "increase" as ChangeType,
        period: "این هفته",
        color: "error",
    },
    {
        id: "collectedThisMonth",
        title: "وصولی این ماه",
        value: 42.7,
        unit: "م ریال",
        change: 8.1,
        changeType: "increase" as ChangeType,
        period: "نسبت به ماه قبل",
        color: "success",
    },
    {
        id: "activeCustomers",
        title: "مشتریان فعال",
        value: 247,
        change: 6,
        changeType: "increase" as ChangeType,
        period: "این ماه",
        color: "info",
    },
    {
        id: "activeCredits",
        title: "اعتبارات فعال",
        value: 183,
        change: 12,
        changeType: "neutral" as ChangeType,
        period: "تسویه شده این ماه",
        color: "secondary",
    },
];