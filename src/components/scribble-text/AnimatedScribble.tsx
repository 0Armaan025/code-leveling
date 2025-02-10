"use client"; // Ensures it runs only on the client

import { motion } from "framer-motion";

const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

export default function AnimatedScribble() {
    return (
        <motion.svg
            viewBox="0 0 100 50"
            className="absolute w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
            initial="hidden"
            animate="visible"
        >
            <motion.path
                d="M10 40 Q 50 10 90 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                variants={pathVariants}
            />
        </motion.svg>
    );
}
