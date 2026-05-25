"use client";
import { links } from "@/data/DashboardMenuData";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import DashLinks from "./DashLinks";
import DashProfileBox from "./DashProfileBox";

const SideBar = () => {
    const pathname = usePathname();

    return (
        <Card className="w-75 lg:w-full h-full top-0 right-0 bottom-0 z-999 p-4! flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                    <DashLinks key={index} link={link} pathname={pathname} />
                ))}
            </div>
            <DashProfileBox />
        </Card>
    );
};

export default SideBar;
