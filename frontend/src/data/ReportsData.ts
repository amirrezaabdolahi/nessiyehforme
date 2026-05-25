import { MuiColors } from "@/types/handiTypes";

interface ReportCardType {
    id: number,
    title: string,
    value: number,
    color: MuiColors
}

export const ReportCardsData: ReportCardType[] = [
    {
        id: 1,
        title: "اشکال در انتقال",
        value: 12,
        color: "warning"
    },
    {
        id: 2,
        title: "جمع مبلغ پراخت شده",
        value: 420000000,
        color: "success"
    },
    {
        id: 3,
        title: "تعداد پرداختی ها",
        value: 38,
        color: "primary"
    },
    {
        id: 4,
        title: "نعداد رسید های گذشته",
        value: 7,
        color: "warning"
    }
]