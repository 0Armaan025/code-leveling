import dynamic from "next/dynamic";

const AnimatedScribble = dynamic(() => import("./AnimatedScribble"), { ssr: false });

export default function ScribbleText({ children }: { children: React.ReactNode }) {
    return (
        <span className="relative inline-block font-bold dark:text-[#d237f8] text-black">
            {children}
            <AnimatedScribble />
        </span>
    );
}
