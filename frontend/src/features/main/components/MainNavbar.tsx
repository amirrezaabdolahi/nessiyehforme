import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";
import AccountAvatar from "./AccountAvatar";

const MainNavbar = () => {
    return (
        <div className="w-full h-16 bg-gray-300/50 sticky top-0 z-999 backdrop-blur-md">
            <div className="container mx-auto h-full flex items-center justify-between">
                <div className="cursor-pointer">
                    <AccountAvatar />
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="text-gray-700 hover:text-gray-900 transition"
                    >
                        خانه
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-700 hover:text-gray-900 transition"
                    >
                        درباره ما
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-700 hover:text-gray-900 transition"
                    >
                        اشتراک
                    </Link>
                </div>
                <div className="text-xl font-bold">نسیه</div>
            </div>
        </div>
    );
};

export default MainNavbar;
