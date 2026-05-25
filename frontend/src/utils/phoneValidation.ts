// --- Validation Function ---
export const validatePhone = (inputPhone: string): string | null => {
    if (!inputPhone) {
        // Consider a general error if input is empty, or handle it via Button disabled state
        return "شماره موبایل الزامی است.";
    }

    let processedPhone = inputPhone.replace(/[\s\-()]/g, ""); // Remove spaces, dashes, parentheses

    // Rule 1: Must be at least 11 digits
    if (processedPhone.length < 11) {
        return "شماره موبایل باید حداقل 11 رقم باشد.";
    }

    // Rule 2: Must not contain alphabet characters
    if (/[a-zA-Z]/.test(processedPhone)) {
        return "شماره موبایل فقط می‌تواند شامل اعداد و علامت + باشد.";
    }

    // Rule 3: Must start with +98 or 09
    if (
        !(
            processedPhone.startsWith("+98") ||
            processedPhone.startsWith("09")
        )
    ) {
        return "شماره موبایل باید با 09 یا +98 شروع شود.";
    }

    // Rule 4: Must contain numbers only (after potentially removing '+')
    const digitsOnly = processedPhone.startsWith("+")
        ? processedPhone.slice(1)
        : processedPhone;
    if (!/^\d+$/.test(digitsOnly)) {
        return "شماره موبایل فقط می‌تواند شامل اعداد باشد.";
    }

    return null; // Indicates the phone number is valid
};