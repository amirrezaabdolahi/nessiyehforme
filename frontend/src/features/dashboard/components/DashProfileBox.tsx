"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";

const DashProfileBox = () => {
    const user = useAppSelector((s) => s.userInfo);

    return (
        <Link href={"/dashboard/profile"}>
            <Box className="flex gap-2 border-t border-gray-300 p-2 items-center cursor-pointer ">
                <Avatar sx={{ bgcolor: "primary.main" }}>
                    {user.full_name?.[0]}
                </Avatar>
                <span className="flex flex-col ">
                    <Typography variant="body1">{user.full_name}</Typography>
                    <Typography variant="caption">
                        {user.phone_number}
                    </Typography>
                </span>
            </Box>
        </Link>
    );
};

export default DashProfileBox;
