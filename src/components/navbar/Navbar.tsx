"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import './navbar.css';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    // Theme-based logo selection
    const logoSrc = theme === 'dark' ? "/logo_light.png" : "/logo_dark.png";

    const getLinkStyle = (path: string) =>
        pathname === path
            ? "dark:text-white text-gray-900 font-bold"
            : "text-gray-500 dark:hover:text-gray-400 hover:text-gray-700";

    // Theme toggle handler
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar flex dark:from-gray-900 dark:to-gray-800 justify-between sticky top-0 z-[10000] bg-opacity-90  items-center px-4 py-2 dark:border-b border-gray-800 blur-[0.3px] dark:bg-black bg-white">
                {/* Logo and Title Section */}
                <div className="flex items-center">
                    <div className="flex items-center dark:bg-white bg-gray-900 h-8 w-8 rounded-md">
                        <Link href="/">
                            {mounted && (
                                <Image
                                    src={logoSrc}
                                    alt="logo"
                                    width={40}
                                    height={40}
                                    className="hover:cursor-pointer transition-all hover:shadow-md dark:hover:shadow-gray-700"
                                    priority
                                />
                            )}
                        </Link>
                    </div>
                    <Link href="/">
                        <h3 className="headingText dark:text-white text-black ml-4 font-semibold text-lg">
                            Code-Leveling
                        </h3>
                    </Link>
                    {/* Version Badge and Intro Chip */}
                    <div className="hidden md:flex items-start ml-4">
                        <div className="px-3 py-1 rounded-3xl  border-[0.7px] border-gray-700 cursor-pointer transition-all dark:bg-[#1d1d1f] bg-white dark:text-[#7f7f86] text-gray-500">
                            <h3 className="text-xs font-semibold">Version 1.0</h3>
                        </div>
                        <div className="px-3 py-1 ml-4 rounded-3xl cursor-pointer border-[0.7px] border-gray-700  dark:hover:bg-[#1f1f22] hover:text-gray-500 transition-all dark:border-[0.7px] border-gray-700 dark:bg-[#1c1c1f] dark:text-[#ecedee] bg-white text-gray-900">
                            <h3 className="text-xs font-semibold">Introducing Code-Leveling 🔥</h3>
                        </div>
                    </div>
                </div>

                {/* Theme Toggle Button (Mobile Only) */}
                <div className="md:hidden flex items-center justify-center space-x-4">
                    <button
                        className="bg-transparent text-white"
                        onClick={toggleTheme}
                    >
                        {mounted && (
                            theme === 'dark' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun w-6 h-6">
                                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
                                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
                                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M12 2C7.03 2 4 6 4 6s0 2 4 2v2h8V8c4 0 4-2 4-2s-3.03-4-8-4z"></path>
                                    <path d="M12 20v-2M12 22v-2M10 16h4M9 18h6"></path>
                                </svg>
                            )
                        )}
                    </button>
                </div>

                {/* Links and Buttons */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/docs"><h3 className={`transition-all cursor-pointer text-black ${getLinkStyle('/docs')}`}>Docs</h3></Link>
                    <Link href="/about"><h3 className={`transition-all cursor-pointer text-black ${getLinkStyle('/about')}`}>About</h3></Link>
                    <Link href="/leaderboard"><h3 className={`transition-all cursor-pointer  text-black ${getLinkStyle('/leaderboard')}`}>Leaderboard</h3></Link>

                    {/* Social Buttons */}
                    <div className="px-3 py-1 flex items-center rounded-3xl border-[0.5px] cursor-pointer dark:bg-transparent bg-gray-900 dark:hover:bg-white dark:hover:bg-opacity-5 transition-all border-gray-700">
                        <Image src="https://i.ibb.co/4NjcSnQ/github.png" alt="github logo" height={20} width={20} />
                        <h3 className="text-[#fff] ml-2 font-semibold">GitHub</h3>
                    </div>
                    <div className="px-3 py-1 flex items-center rounded-3xl border-[0.5px] cursor-pointer dark:bg-transparent bg-gray-900 dark:hover:bg-white dark:hover:bg-opacity-5 transition-all border-gray-700">
                        <Image src="https://i.ibb.co/NmndwN9/discord.png" alt="discord logo" height={20} width={20} />
                        <h3 className="text-[#fff] ml-2 font-semibold">Discord</h3>
                    </div>

                    {/* Profile Button */}
                    <div className="px-2 py-2 flex items-center justify-center rounded-3xl border-[0.5px] cursor-pointer dark:hover:bg-white dark:hover:bg-opacity-5 dark:bg-transparent bg-gray-900 transition-all border-gray-700">
                        <Link href="/profile">
                            <Image src="https://i.ibb.co/2d8MDpx/profile-user.png" alt="profile logo" height={30} width={20} />
                        </Link>
                    </div>
                </div>

                {/* Sidebar Toggle Button (Mobile Only) */}
                <button
                    className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition"
                    onClick={toggleSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </nav>

            {/* Sidebar (Mobile) */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-end">
                    <div className="w-64 dark:bg-black bg-white h-full shadow-md p-4">
                        <button className="text-gray-900 dark:text-white mb-4 hover:text-gray-400" onClick={toggleSidebar}>
                            Close
                        </button>
                        <ul className="space-y-4">
                            <Link href="/docs"><li className={`cursor-pointer ${getLinkStyle('/docs')}`}>Docs</li></Link>
                            <Link href="/about"><li className={`cursor-pointer ${getLinkStyle('/about')}`}>About</li></Link>
                            <Link href="/leaderboard"><li className={`cursor-pointer ${getLinkStyle('/leaderboard')}`}>Leaderboard</li></Link>
                            <li className="text-gray-900 dark:text-white hover:text-gray-400 cursor-pointer">GitHub</li>
                            <li className="text-gray-900 dark:text-white hover:text-gray-400 cursor-pointer">Discord</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
