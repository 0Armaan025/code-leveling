"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 mt-8  rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
            >
                {isSidebarOpen ? "×" : "☰"}
            </button>

            {/* Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 mt-8 bg-black/50 z-[999999999999] lg:hidden"
                />
            )}

            {/* Sidebar Container */}
            <div
                className={`flex flex-col w-64 min-h-screen dark:bg-black bg-gradient-to-r from-sky-300 to-indigo-400 dark:from-gray-900 dark:to-gray-800 text-gray-900 p-4 md:p-6 border-r border-gray-800 fixed lg:relative left-0 top-0 transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                {/* Logo or Branding */}
                <div className="mb-6 md:mb-10">
                    <h1 className="text-2xl font-bold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-600 text-black">
                        Code-leveling
                    </h1>
                </div>

                {/* Navigation Links (existing content remains the same) */}
                <nav className="space-y-2">
                    {/* Profile Link */}
                    <Link
                        href="/profile"
                        className={`flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group ${isActive('/profile')
                            ? 'bg-purple-800 hover:bg-purple-800'
                            : 'hover:translate-x-2'
                            }`}
                    >
                        <span
                            className={`text-gray-400 transition-colors duration-300 ${isActive('/profile') ? 'text-purple-400' : 'group-hover:text-purple-400'
                                }`}
                        >
                            👤
                        </span>
                        <span
                            className={`ml-3 dark:text-gray-300 text-gray-900 transition-colors duration-300 ${isActive('/profile') ? 'text-white font-semibold' : 'group-hover:text-white'
                                }`}
                        >
                            Profile
                        </span>
                    </Link>

                    {/* Dashboard Link */}
                    <Link
                        href="/dashboard"
                        className={`flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group ${isActive('/dashboard')
                            ? 'bg-blue-800 hover:bg-blue-800'
                            : 'hover:translate-x-2'
                            }`}
                    >
                        <span
                            className={`text-gray-400 transition-colors duration-300 ${isActive('/dashboard') ? 'text-blue-400' : 'group-hover:text-blue-400'
                                }`}
                        >
                            📊
                        </span>
                        <span
                            className={`ml-3 dark:text-gray-300 text-gray-900 transition-colors duration-300 ${isActive('/dashboard') ? 'text-white font-semibold' : 'group-hover:text-white'
                                }`}
                        >
                            Dashboard
                        </span>
                    </Link>

                    {/* Lab Link */}
                    <Link
                        href="/lab"
                        className={`flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group ${isActive('/lab')
                            ? 'bg-blue-800 hover:bg-blue-800'
                            : 'hover:translate-x-2'
                            }`}
                    >
                        <span
                            className={`text-gray-400 transition-colors duration-300 ${isActive('/dashboard') ? 'text-blue-400' : 'group-hover:text-blue-400'
                                }`}
                        >
                            🧪
                        </span>
                        <span
                            className={`ml-3 dark:text-gray-300 text-gray-900 transition-colors duration-300 ${isActive('/lab') ? 'text-white font-semibold' : 'group-hover:text-white'
                                }`}
                        >
                            Lab
                        </span>
                    </Link>

                    {/* Your Items Link */}
                    <Link
                        href="/items"
                        className={`flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group ${isActive('/items')
                            ? 'bg-green-800 hover:bg-green-800'
                            : 'hover:translate-x-2'
                            }`}
                    >
                        <span
                            className={`text-gray-400 transition-colors duration-300 ${isActive('/items') ? 'text-green-400' : 'group-hover:text-green-400'
                                }`}
                        >
                            🛍️
                        </span>
                        <span
                            className={`ml-3 dark:text-gray-300 text-gray-900 transition-colors duration-300 ${isActive('/items') ? 'text-white font-semibold' : 'group-hover:text-white'
                                }`}
                        >
                            Your Items
                        </span>
                    </Link>

                    {/* Shop Link */}
                    <Link
                        href="/shop"
                        className={`flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group ${isActive('/shop')
                            ? 'bg-yellow-800 hover:bg-yellow-800'
                            : 'hover:translate-x-2'
                            }`}
                    >
                        <span
                            className={`text-gray-400 transition-colors duration-300 ${isActive('/shop') ? 'text-yellow-400' : 'group-hover:text-yellow-400'
                                }`}
                        >
                            🏪
                        </span>
                        <span
                            className={`ml-3 dark:text-gray-300 text-gray-900 transition-colors duration-300 ${isActive('/shop') ? 'text-white font-semibold' : 'group-hover:text-white'
                                }`}
                        >
                            Shop
                        </span>
                    </Link>

                    {/* Redeem Link */}
                    <Link
                        href="/redeem"
                        className={`flex items-center p-2 md:p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 group ${isActive('/redeem')
                            ? 'bg-indigo-800 hover:bg-indigo-800'
                            : 'hover:translate-x-2'
                            }`}
                    >
                        <span
                            className={`text-gray-400 transition-colors duration-300 ${isActive('/redeem') ? 'text-indigo-400' : 'group-hover:text-indigo-400'
                                }`}
                        >
                            🎁
                        </span>
                        <span
                            className={`ml-3 dark:text-gray-300 text-gray-900 transition-colors duration-300 ${isActive('/redeem') ? 'text-white font-semibold' : 'group-hover:text-white'
                                }`}
                        >
                            Redeem
                        </span>
                    </Link>
                </nav>

                {/* Logout Button (existing content remains the same) */}
                <div className="mt-6 md:mt-10">
                    <button className="flex items-center w-full p-2 md:p-3 rounded-lg hover:bg-red-800 transition-all duration-300 hover:translate-x-2 group">
                        <span className="text-red-400 group-hover:text-red-200 transition-colors duration-300">
                            🔒
                        </span>
                        <span className="ml-3 text-red-400 group-hover:text-red-200 transition-colors duration-300">
                            Log Out
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default LeftSidebar;
