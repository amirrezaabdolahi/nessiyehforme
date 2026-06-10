import { z } from "zod";

export const signupFormSchema = z.object({
    phone_number: z
        .string()
        .min(10, "شماره موبایل باید حداقل 10 رقم باشد.")
        .max(11, "شماره موبایل باید حداکثر 11 رقم باشد")
        .regex(/^(\+98|09)/, "شماره موبایل معتبر نیست."),
    full_name: z.string().min(5, "نام کاربری باید حداقل 5 کاراکتر باشد."),
    password: z.string().min(5, "رمز عبور باید حداقل 5 کاراکتر باشد."),
});

export const shopSignupFormSchema = z.object({
    phone_number: z
        .string()
        .min(10, "شماره موبایل باید حداقل 10 رقم باشد.")
        .max(11, "شماره موبایل باید حداکثر 11 رقم باشد")
        .regex(/^(\+98|09)/, "شماره موبایل معتبر نیست."),
    full_name: z.string().min(5, "نام کاربری باید حداقل 5 کاراکتر باشد."),
    password: z.string().min(5, "رمز عبور باید حداقل 5 کاراکتر باشد."),
    shop_name: z.string().min(3, "نام فروشگاه باید حداقل 3 کاراکتر باشد."),
    shop_address: z.string().min(5, "آدرس فروشگاه باید حداقل 5 کاراکتر باشد.").optional(),
});
