"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const UserPage = () => {
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    
    const name = usePathname();
    const [userData, setUserData] = useState<any>(null);


    // Prevent hydration errors by ensuring client-side rendering
    useEffect(() => {
        setIsMounted(true);
        
        setUserData({
            developerName: "coder123",
            email: "johndoe@example.com",
            devBits: 1500,
            totalCodingTime: "1,200 hours",
            mostUsedLanguage: "JavaScript",
            bestProject: "CodeLevel Platform",
            bio: "Passionate coder | Open-source enthusiast | Building cool stuff 🚀",
            codingStreak: "42 days",
            currentLevel: "Advanced",
            favoriteLanguage: "JavaScript",
        });
    }, []);

    // Ensure component only renders after mounting
    if (!isMounted || !userData) return null;

    return (
        <div className={`userPage overflow-x-hidden min-h-screen cursor-pointer transition-all hover:scale-105 flex flex-col items-center justify-start pt-16    z-10 
            ${theme === "dark" ? "bg-gradient-to-b from-black to-gray-900 text-white" : "bg-white text-black"}
        `}>
            {/* User Card */}
            <div
                className={` mb-40 w-[90%] max-w-3xl rounded-3xl border shadow-lg flex flex-col items-center space-y-6 p-8
                ${theme === "dark" ? "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700" : "bg-white border-gray-300"}
                `}
                style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)" }}
            >
                <div className={`absolute inset-0 rounded-3xl opacity-20 
                    ${theme === "dark" ? "bg-gradient-to-b from-blue-800 to-transparent" : "bg-gray-200"}
                `}></div>

                {/* Profile Section */}
                <div className="flex flex-col items-center space-y-4">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border-4 
                        ${theme === "dark" ? "bg-blue-600 border-blue-400" : "bg-gray-300 border-gray-400"}
                    `}>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-3xl font-extrabold" suppressHydrationWarning>
                        @{userData.developerName}
                    </h1>
                    <p className={`text-center max-w-md ${theme === "dark" ? "text-blue-400" : "text-gray-600"}`}>
                        {userData.bio}
                    </p>
                </div>

                {/* User Details Section */}
                <div className="grid grid-cols-2 gap-6 w-full">
                    {[
                        ["DevBits", "devBits"],
                        ["Total Coding Time", "totalCodingTime"],
                        ["Email", "email"],
                        ["Coding Streak", "codingStreak"],
                        ["Current Level", "currentLevel"],
                        ["Most Used Language", "mostUsedLanguage"],
                        ["Favorite Language", "favoriteLanguage"],
                        ["Best Project", "bestProject"],
                    ].map(([label, key]) => (
                        <div key={key}>
                            <label className="text-sm text-gray-500 block">{label}</label>
                            <p className="text-lg font-semibold">{userData[key]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
