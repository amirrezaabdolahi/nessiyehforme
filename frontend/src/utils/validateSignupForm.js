import { validatePhone } from "./phoneValidation";

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
