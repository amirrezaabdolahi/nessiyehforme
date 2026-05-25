"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const SlideUpAnimation = ({ children }) => {
    const pathname = usePathname();
    return (
        <motion.div
            key={pathname}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
                hidden: { opacity: 0, y: 10 }, // شروع: کمی پایین‌تر و نامرئی
                visible: {
                    opacity: 1,
                    y: 0, // پایان: جای اصلی و کاملاً مرئی
                    transition: { duration: 0.3, ease: "easeOut" }, // سرعت و نرمی حرکت
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export default SlideUpAnimation;
