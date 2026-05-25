"use client";

import { useAppDispatch } from "@/lib/redux/hooks";
import validateSignupForm, { ErrorState } from "@/utils/validateSignupForm";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { userInfoActions } from "../slices/userInformationsSlice";

export interface formDataType {
    phone: string;
    username: string;
    email: string;
    password: string;
}

const Signup = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<formDataType>({
        phone: "",
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<ErrorState>({
        phone: false,
        username: false,
        email: false,
        password: false,
    });

    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const dispatch = useAppDispatch();

    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault(); // جلوگیری از دیفالت براوزر موقع کلیک
    };

    const handleSubmin = async () => {
        const isValidForm = validateSignupForm(formData);
        if (!isValidForm.isValid) {
            setErrors(isValidForm.errors);
            return;
        }

        // const mypromise = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         let success = true;
        //         if (success) {
        //             resolve("successfully");
        //             redirect("?mode=code");
        //         }
        //         reject("unsuccessfully");
        //     }, 2000);
        // });
        // toast.promise(mypromise, {
        //     pending: "درحال ارسال اطلاعات",
        //     success: "کد ارسال شده را وارد کنید",
        //     error: "مشکلی در ارسال اطلات به وجود آمده",
        // });

        try {
            setLoading(true);
            const res = await fetch("api/auth/signup", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.ok) {
                router.push("?mode=code");
                toast.success("کد ارسال شد");
                toast.info(data.otp, { autoClose: 10000 });
                dispatch(
                    userInfoActions.updateForm({
                        field: "phone",
                        value: formData.phone,
                    }),
                );
                dispatch(
                    userInfoActions.updateForm({
                        field: "username",
                        value: formData.username,
                    }),
                );
                dispatch(
                    userInfoActions.updateForm({
                        field: "email",
                        value: formData.email,
                    }),
                );
                dispatch(
                    userInfoActions.updateForm({
                        field: "password",
                        value: formData.password,
                    }),
                );
            }

            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4 w-full border-b pb-6 border-gray-400 ">
                <Typography variant="body1">یه اکانت بساز</Typography>
                <TextField
                    label="شماره موبایل"
                    size="small"
                    type="tel"
                    required
                    inputProps={{
                        inputMode: "numeric", // فعال‌سازی صفحه‌کلید عددی در موبایل
                        pattern: "[0-9]*", // فقط عدد قبول کنه
                        maxLength: 11, // مثلا برای شماره‌های ایران
                    }}
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                        handleValueChange(e);
                    }}
                    error={Boolean(errors.phone)}
                    helperText={
                        Boolean(errors.phone)
                            ? errors.phone
                            : "از شماره ای استفاده کن که قبلا باهاش ثبت نام نکردی"
                    }
                />
                <TextField
                    label="نام کاربری"
                    size="small"
                    required
                    name="username"
                    value={formData.username}
                    onChange={(e) => {
                        handleValueChange(e);
                    }}
                    error={Boolean(errors.username)}
                    helperText={
                        Boolean(errors.username)
                            ? errors.username
                            : "اسم خودت یا مغازت"
                    }
                />
                <TextField
                    label="ایمیل"
                    size="small"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                        handleValueChange(e);
                    }}
                    error={Boolean(errors.email)}
                    helperText={
                        Boolean(errors.email)
                            ? errors.email
                            : "ایمیلت رو وارد کن ( اختیاری )"
                    }
                />
                <TextField
                    label="گذرواژه"
                    size="small"
                    type={showPassword ? "text" : "password"}
                    required
                    InputProps={{
                        // این قسمت برای قرار دادن آیکون در انتهای فیلده
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end" // برای چسبیدن آیکون به لبه
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    name="password"
                    value={formData.password}
                    onChange={(e) => {
                        handleValueChange(e);
                    }}
                    error={Boolean(errors.password)}
                    helperText={
                        Boolean(errors.password)
                            ? errors.password
                            : "یه رمز انتخاب کن که یادت نر ( بعدا میتونی عوض کنی )"
                    }
                />
                <Button variant="contained" onClick={handleSubmin}>
                    ثبت نام
                </Button>
            </div>
            <Typography variant="body2" className="mt-4!">
                قبلا اکانت داشتید ؟{" "}
                <Link className="text-blue-500" href={"?mode=signin"}>
                    {" "}
                    ورود اکانت{" "}
                </Link>
            </Typography>
        </>
    );
};

export default Signup;
