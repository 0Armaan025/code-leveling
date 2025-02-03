"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const LeftSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = (path: string) => usePathname() === path;

    return (
        <>
            {/* Hamburger Icon for Mobile */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-900 p-3 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed md:relative z-40 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
                w-64 md:w-64 min-h-screen bg-gray-900 text-white p-6 border-r border-gray-800
                md:block`}
            >
                {/* Branding */}
                <div className="mb-10">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Code-leveling
                    </h1>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                    {[
                        { path: "/profile", label: "Profile", icon: "👤", color: "purple" },
                        { path: "/dashboard", label: "Dashboard", icon: "📊", color: "blue" },
                        { path: "/lab", label: "Lab", icon: "🧪", color: "blue" },
                        { path: "/items", label: "Your Items", icon: "🛍️", color: "green" },
                        { path: "/shop", label: "Shop", icon: "🏪", color: "yellow" },
                        { path: "/redeem", label: "Redeem", icon: "🎁", color: "indigo" }
                    ].map(({ path, label, icon, color }) => (
                        <Link
                            key={path}
                            href={path}
                            className={`flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group
                                ${isActive(path) ? `bg-${color}-800 hover:bg-${color}-800` : "hover:translate-x-2"}
                            `}
                        >
                            <span className={`text-gray-400 group-hover:text-${color}-400 transition-colors duration-300`}>
                                {icon}
                            </span>
                            <span className={`ml-3 text-gray-300 transition-colors duration-300 ${isActive(path) ? "text-white font-semibold" : "group-hover:text-white"}`}>
                                {label}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Logout Button */}
                <div className="mt-10">
                    <button className="flex items-center w-full p-3 rounded-lg hover:bg-red-800 transition-all duration-300 hover:translate-x-2 group">
                        <span className="text-red-400 group-hover:text-red-200 transition-colors duration-300">
                            🔒
                        </span>
                        <span className="ml-3 text-red-400 group-hover:text-red-200 transition-colors duration-300">
                            Log Out
                        </span>
                    </button>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default LeftSidebar;
