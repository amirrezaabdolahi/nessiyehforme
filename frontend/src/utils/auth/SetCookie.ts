"use server";
import { cookies } from "next/headers";



const CookieOptions = {
    options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax" as const,
        path: "/",
    },
    duration: 24 * 60 * 60,
};

export async function setCookie(
    name: string,
    value: string,
): Promise<void> {

    const cookieStore = await cookies()
    cookieStore.set(name, value, { ...CookieOptions.options , maxAge : CookieOptions.duration });
}