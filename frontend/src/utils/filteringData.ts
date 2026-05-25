// تعریف تایپ برای دسته‌بندی‌ها
export type Category = {
    id: number;
    name: string;
    value: string;
};

export const categories: Category[] = [
    { id: 1, name: "مواد غذایی خشک و آشپزخانه", value: "dry_food" },
    { id: 2, name: "لبنیات و صبحانه", value: "dairy_breakfast" },
    { id: 3, name: "نوشیدنی‌ها", value: "beverages" },
    { id: 4, name: "پروتئینی", value: "protein" },
    { id: 5, name: "میوه و سبزیجات", value: "fruits_vegetables" },
    { id: 6, name: "شوینده و بهداشتی", value: "cleaning_hygiene" },
    { id: 7, name: "آرایشی و مراقبتی", value: "cosmetics" },
    { id: 8, name: "دخانیات", value: "smokes" },
];

// تعریف تایپ برای شاخه‌ها (زیرمجموعه‌ها)
export type BranchMap = {
    [key: string]: Category[]; // کلیدها همان valueهای دسته‌بندی اصلی هستند
};

export const branches: BranchMap = {
    dry_food: [
        { id: 101, name: "حبوبات و غلات", value: "pulses_grains" },
        { id: 102, name: "روغن و چربی", value: "oils_fats" },
        { id: 103, name: "کنسرو و غذاهای آماده", value: "canned_food" },
        { id: 104, name: "ادویه و چاشنی", value: "spices_condiments" },
        { id: 105, name: "شکر و شیرینی", value: "sugar_sweets" },
        { id: 106, name: "آرد و نشاسته", value: "flour_starch" },
        { id: 107, name: "ماکارونی و پاستا", value: "pasta" },
    ],
    dairy_breakfast: [
        { id: 201, name: "شیر", value: "milk" },
        { id: 202, name: "ماست و دوغ", value: "yoghurt_drink" },
        { id: 203, name: "پنیر", value: "cheese" },
        { id: 204, name: "کره و خامه", value: "butter_cream" },
        { id: 205, name: "تخم‌مرغ", value: "eggs" },
        { id: 206, name: "پنیر خامهای و لاکتیکی", value: "cream_cheese_lactic" },
    ],
    beverages: [
        { id: 301, name: "آب معدنی و گازدار", value: "water_soda" },
        { id: 302, name: "نوشابه و انرژی‌زا", value: "soda_energy" },
        { id: 303, name: "آب‌میوه و شربت", value: "juice_syrup" },
        { id: 304, name: "چای و دمنوش", value: "tea_herbal" },
        { id: 305, name: "قهوه", value: "coffee" },
    ],
    protein: [
        { id: 401, name: "گوشت قرمز", value: "red_meat" },
        { id: 402, name: "مرغ", value: "chicken" },
        { id: 403, name: "ماهی و دریایی", value: "seafood" },
        { id: 404, name: "کالباس و سوسیس", value: "cold_cuts" },
        { id: 405, name: "پروتئین گیاهی", value: "plant_protein" },
    ],
    fruits_vegetables: [
        { id: 501, name: "سبزیجات تازه", value: "fresh_vegetables" },
        { id: 502, name: "میوه‌های تازه", value: "fresh_fruits" },
        { id: 503, name: "سبزیجات فریزری", value: "frozen_vegetables" },
        { id: 504, name: "میوه‌های خشک", value: "dried_fruits" },
        { id: 505, name: "حبوبات خشک", value: "dried_pulses" },
    ],
    cleaning_hygiene: [
        { id: 601, name: "شوینده لباس", value: "laundry_detergent" },
        { id: 602, name: "شوینده ظروف", value: "dishwashing_detergent" },
        { id: 603, name: "بهداشت شخصی", value: "personal_hygiene" },
        { id: 604, name: "بهداشت منزل", value: "home_hygiene" },
        { id: 605, name: "تجهیزات نظافتی", value: "cleaning_equipment" },
    ],
    cosmetics: [
        { id: 701, name: "مراقبت پوست", value: "skin_care" },
        { id: 702, name: "مراقبت مو", value: "hair_care" },
        { id: 703, name: "آرایشی صورت", value: "face_makeup" },
        { id: 704, name: "آرایشی چشم", value: "eye_makeup" },
        { id: 705, name: "عطر و ادکلن", value: "perfume_cologne" },
        { id: 706, name: "مراقبت آقایان", value: "mens_care" },
    ],
    smokes: [
        { id: 801, name: "سیگار", value: "cigarettes" },
        { id: 802, name: "سیگار الکترونیکی (ویپ)", value: "e_cigarettes" },
        { id: 803, name: "ترشیحات دخانیات", value: "tobacco_flavors" },
        { id: 804, name: "نی و لوازم جانبی", value: "accessories" },
        { id: 805, name: "سیگار قلیان", value: "hookah_tobacco" },
    ],
};