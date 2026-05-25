import { NextResponse } from "next/server"
import { otpStore } from "../signup/route"



export async function POST(req: Request) {

    const body = await req.json()

    const { username, otp } = body

    const savedOtp = otpStore.get(username)

    if (!savedOtp || Number(otp) !== savedOtp) {
        return NextResponse.json({
            ok: false, message: "کد وارد شده اشتباه است"
        },
            { status: 401 }
        )
    }

    otpStore.delete(username)

    return NextResponse.json({
        ok: true,
        message: "User verified",
    });

}