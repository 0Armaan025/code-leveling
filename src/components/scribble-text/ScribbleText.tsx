import { motion } from "framer-motion";

export default function ScribbleText({ children }: { children: React.ReactNode }) {
    const pathVariants = {
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } },
    };

    return (
        <span style={{ position: "relative", display: "inline-block", fontWeight: "bold" }} className="dark:text-[#d237f8] text-white ">
            {children}
            <motion.svg
                viewBox="0 0 100 50"
                style={{
                    position: "absolute",
                    top: "-20px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "120%",
                    height: "120%",
                    zIndex: -1,
                }}
            >
                <motion.path
                    d="M10 40 Q 50 10 90 40"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
            </motion.svg>
        </span>
    );
}
