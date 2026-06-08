"use client";

import { userInfoActions } from "@/features/auth/slices/userInformationsSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useEffect } from "react";

interface AuthHydratorProps {
    user: any;
}

export default function AuthHydrator({ user }: AuthHydratorProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            userInfoActions.updateForm({
                field: "phone_number",
                value: user.phone_number,
            }),
        );
        dispatch(
            userInfoActions.updateForm({
                field: "full_name",
                value: user.full_name,
            }),
        );
        dispatch(
            userInfoActions.updateForm({
                field: "is_shop",
                value: user.is_shop,
            }),
        );
        dispatch(
            userInfoActions.updateForm({
                field: "shop_name",
                value: user.shop_name,
            }),
        );
        dispatch(
            userInfoActions.updateForm({
                field: "shop_address",
                value: user.shop_address,
            }),
        );
        dispatch(
            userInfoActions.updateForm({
                field: "isAuthenticated",
                value: true,
            }),
        );
    }, [dispatch, user]);

    return null;
}
