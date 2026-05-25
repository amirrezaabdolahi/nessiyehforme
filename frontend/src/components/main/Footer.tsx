import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-4 text-center w-full h-40 flex items-center justify-center">
            <Typography variant="body1">
                &copy; {new Date().getFullYear()} نسیه - همه حقوق محفوظ است.
            </Typography>
        </div>
    );
};

export default Footer;
