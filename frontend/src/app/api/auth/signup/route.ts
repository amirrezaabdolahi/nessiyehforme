import { NextResponse } from "next/server";


const otpStore = new Map<string, number>()
export async function POST(req: Request) {
    try {

        const body = await req.json()
        const { username } = body

        const otp = Math.floor(100000 + Math.random() * 900000)

        otpStore.set(username, otp)

        console.log(" new sigup: ", body);
        console.log('otp for ', username, "is", otp);

        return NextResponse.json({
            ok: true,
            message: "OTP generated",
            body,
            otp, // training only
        });

    } catch (error) {
        return NextResponse.json(
            { ok: false, message: "Invalid request" },
            { status: 400 }
        );
    }
}

export { otpStore }