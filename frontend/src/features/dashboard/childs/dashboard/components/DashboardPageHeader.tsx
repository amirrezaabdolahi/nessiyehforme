"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { formatedTodayDate } from "@/utils/date";
import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardPageHeader = ({ children }: { children: React.ReactNode }) => {
    const user = useAppSelector((s) => s.userInfo);

    return (
        <Box className="flex items-center flex-wrap gap-4 justify-between">
            <Box className="flex flex-col items-start gap-2">
                <Typography variant="h6">روز بخیر {user.full_name}</Typography>
                <Typography variant="body2">{`${user.shop_name} ، ${formatedTodayDate()}`}</Typography>
            </Box>
            <Box className="flex items-center gap-2">{children}</Box>
        </Box>
    );
};

export default DashboardPageHeader;
