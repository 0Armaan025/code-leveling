"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <footer className=" pt-4 rounded-t-lg text-center dark:text-[#66666f] dark:from-gray-900 border-t-[0.3px] border-t-gray-400 dark:border-t-[0.3px] dark:border-t-gray-700 dark:to-gray-800 dark:bg-black bg-white py-4 text-gray-800" style={{ fontFamily: 'Montserrat, serif' }}>
            © 2025 Code-leveling Project. All rights reserved.
        </footer>
    );
};

export default Footer;
