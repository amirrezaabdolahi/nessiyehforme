"use client";

import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import z from "zod";


const validatePhone = z.string()
    .nonempty("شماره موبایل نمی‌تواند خالی باشد.")
    .regex(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شده و 11 رقم باشد.")
    .transform((val) => val.trim()); // Optional: Trim whitespace

const Signin = () => {
    const [phone, setPhone] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string | null>(null); // Unified error state
    const buttonRef = useRef<HTMLButtonElement>(null); // Type assertion for buttonRef
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()

    

    const handleSendOtpCode = () => {
        const validationError = validatePhone.safeParse(phone).success;
        if (validationError) {
            setPhoneError("مشکل"); // Set the specific error message
            // Optionally, you might want to clear the phone state or focus the input here
            return;
        }

        setPhoneError(null); // Clear any previous errors if validation passes
        setLoading(true); // Set loading state for UI feedback

        // --- Simulate API Call ---
        const sendCode = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success/failure of the API call
                const success = Math.random() > 0.3; // Simulate success ~70% of the time
                if (success) {
                    resolve("کد با موفقیت ارسال شد.");
                } else {
                    reject("خطا در ارسال کد. لطفا دوباره امتحان کنید.");
                }
                router.push("?mode=code")
            }, 2000); // Simulate network latency
        });

        // --- Toast Notification ---
        toast
            .promise(sendCode, {
                pending: "درحال ارسال کد...",
                success: {
                    render: ({ data }) => `${data}`, // Display success message from resolve
                },
                error: {
                    render: ({ data }) => `${data}`, // Display error message from reject
                },
            })
            .finally(() => {
                setLoading(false); // Always reset loading state after promise settles
            });
    };

    return (
        <>
            <div className="flex flex-col gap-4 w-full border-b pb-6 border-gray-400">
                <Typography variant="body1">ورود به اکانت</Typography>
                <TextField
                    label="شماره موبایل"
                    size="small"
                    type="tel" // Use "tel" for phone numbers for better mobile keyboard experience
                    // helperText={phoneError || "شماره ای که با آن ثبت نام کردید"} // Show error or helper text
                    placeholder="09123456789"
                    required
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        // Optional: Clear error as user types
                        if (phoneError) {
                            setPhoneError(null);
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            // Trigger button click via its ref
                            buttonRef.current?.click();
                        }
                    }}
                    inputProps={{
                        inputMode: "numeric", // Activates numeric keyboard on mobile
                        pattern: "[0-9]*", // Basic browser pattern for numeric input
                        // maxLength: 11,     // Let the validation handle length precisely
                    }}
                    error={!!phoneError} // Boolean check for error state
                    helperText={
                        phoneError
                            ? phoneError
                            : "شماره ای که با آن ثبت نام کردید"
                    } // Conditional helper text
                />

                <Button
                    variant="contained"
                    onClick={handleSendOtpCode}
                    ref={buttonRef}
                    disabled={loading || !!phoneError} // Disable if loading or if there's an error
                    // MUI Button does not have a native 'loading' prop.
                    // We'll show loading text conditionally.
                >
                    {loading ? "درحال پردازش..." : "ارسال کد"}
                </Button>
            </div>
            <Typography variant="body2" className="mt-4!">
                قبلا اکانت نداشتید ؟{" "}
                <Link className="text-blue-500" href={"?mode=signup"}>
                    {" "}
                    ساخت اکانت{" "}
                </Link>
            </Typography>
        </>
    );
};

export default Signin;
