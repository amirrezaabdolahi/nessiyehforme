import { marketType } from "@/types/marketTypes";



export const markets : marketType[] = [
    {
        id : "mr-1",
        name : "نگین",
        customers : 211,
        outstanding : 1_440_000_000,
        status : 'active'
    },
    {
        id : "mr-2",
        name : "کروش",
        customers : 12,
        outstanding : 500_000_000,
        status : 'active'
    },
    {
        id : "mr-3",
        name : "رفاه",
        customers : 433,
        outstanding : 3_450_000_000,
        status : 'active'
    },
    {
        id : "mr-4",
        name : "سامان",
        customers : 2,
        outstanding : 0,
        status : 'inactive'
    },
    {
        id : "mr-5",
        name : "کاسپین",
        customers : 0,
        outstanding : 0,
        status : 'inactive'
    },
]