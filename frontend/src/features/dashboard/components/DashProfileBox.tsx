import { Avatar, Box, Typography } from "@mui/material";
import Link from "next/link";

const DashProfileBox = () => {
    return (
        <Link href={"/dashboard/profile"}>
            <Box className="flex gap-2 border-t border-gray-300 p-2 items-center cursor-pointer ">
                <Avatar sx={{ bgcolor: "primary.main" }}>P</Avatar>
                <span className="flex flex-col ">
                    <Typography variant="body1">امیررضا عبدالهی</Typography>
                    <Typography variant="caption">ادمین</Typography>
                </span>
            </Box>
        </Link>
    );
};

export default DashProfileBox;
