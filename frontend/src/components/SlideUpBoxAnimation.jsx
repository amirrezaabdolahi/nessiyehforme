"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const SlideUpBoxAnimation = ({ children, delay = 0 }) => {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex-1"
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                    opacity: 1,
                    y: 0, // پایان: جای اصلی و کاملاً مرئی
                    transition: { delay, duration: 0.3, ease: "easeOut" },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export default SlideUpBoxAnimation;
