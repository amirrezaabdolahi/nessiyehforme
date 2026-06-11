import { string, z } from "zod";

export const validateAddCustomerForm = z.object({
    phone_number: z
        .string()
        .min(10, "شماره موبایل باید حداقل 10 رقم باشد.")
        .max(11, "شماره موبایل باید حداکثر 11 رقم باشد")
        .regex(/^(\+98|09)/, "شماره موبایل معتبر نیست."),
});
