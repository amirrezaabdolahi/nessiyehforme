import { validatePhone } from "./phoneValidation";
import { z } from "zod";

export const signupFormSchema = z.object({
    phone: z
        .string()
        .min(10, "شماره موبایل باید حداقل 10 رقم باشد.")
        .max(11, "شماره موبایل باید حداکثر 11 رقم باشد")
        .regex(/^(\+98|09)/, "شماره موبایل معتبر نیست."),
    username: z.string().min(5, "نام کاربری باید حداقل 5 کاراکتر باشد."),
    email: z.string().email("ایمیل نامعتبر است").optional(),
    password: z.string().min(5, "رمز عبور باید حداقل 5 کاراکتر باشد."),
});

export const validateSignupForm = (formData) => {
    let errors = {};

    const isValidPhone = validatePhone(formData.phone);
    if (isValidPhone) {
        errors.phone = isValidPhone;
    }
    if (!formData.username || formData.username.length < 5) {
        errors.username = "نام کاربری الزامی و باید از 5 کاراکتر بیشتر باشد";
    }
    if (!formData.password || formData.password.length < 5) {
        errors.password = "نام کاربری الزامی و باید از 5 کاراکتر بیشتر باشد";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export default validateSignupForm;
