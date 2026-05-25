

export const CreditBranchName: Array<string> = [
    "شناسه",
    "مشتری",
    "توضیحات",
    "جمع",
    "پرداخت",
    "مانده",
    "تاریخ",
    "وضعیت"
]

export type CreditType = {
    id: string,
    customer: string,
    description?: string,
    total: number,
    paid: number,
    date : string,
    status: "active" | "overdue" | "settled"
}

export const Credits : Array<CreditType> = [
    {
        id : 'CR-0041',
        customer : "علی رضا",
        description : "",
        total : 24000000,
        paid : 16000000,
        date : '1404-2-30',
        status : "active",
    },
    {
        id : 'CR-0042',
        customer : "مریم حسینی",
        description : "",
        total : 24000000,
        paid : 16000000,
        date : '1404-2-30',
        status : "active",
    },
    {
        id : 'CR-0043',
        customer : "رضا کریمی",
        description : "",
        total : 24000000,
        paid : 16000000,
        date : '1404-2-30',
        status : "active",
    },
    {
        id : 'CR-0044',
        customer : "فاطمه احمدی",
        description : "",
        total : 24000000,
        paid : 16000000,
        date : '1404-2-30',
        status : "active",
    },
    {
        id : 'CR-0045',
        customer : "حسن مرادی",
        description : "",
        total : 24000000,
        paid : 16000000,
        date : '1404-2-30',
        status : "active",
    },
]