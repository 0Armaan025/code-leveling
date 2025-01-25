"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LOGO_LIGHT from "../../../public/logo_light.png";
import './navbar.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Function to determine the text style based on the current path
    const getLinkStyle = (path: string) => {
        return pathname === path
            ? 'text-white font-semibold'
            : 'text-gray-500 hover:text-gray-400';
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar flex justify-between sticky top-0 z-[10000] bg-black bg-opacity-40 items-center px-4 py-2 border-b border-gray-800 blur-[0.3px]">
                {/* Logo and Title Section */}
                <div className="flex items-center">
                    <div className="flex items-center bg-white h-8 w-8 rounded-md">
                        <Link href="/"><Image
                            src={LOGO_LIGHT}
                            alt="logo"
                            width={40}
                            height={40}
                            className="hover:cursor-pointer transition-all hover:shadow-md hover:shadow-gray-700"
                        /></Link>
                    </div>
                    <Link href="/"><h3
                        className="headingText text-white ml-4 font-semibold text-lg"
                        style={{ fontFamily: "Montserrat, serif" }}
                    >
                        Code-Leveling
                    </h3></Link>
                    {/* Version Badge and Introduction Chip */}
                    <div className="hidden md:flex items-start ml-4">
                        <div className="px-3 py-1 ml-0 rounded-3xl cursor-pointer hover:bg-[#28282b] transition-all bg-[#1d1d1f] text-[#7f7f86]">
                            <h3 className="text-xs font-semibold">Version 1.0</h3>
                        </div>
                        <div className="px-3 py-1 ml-4 rounded-3xl cursor-pointer hover:bg-[#1f1f22] transition-all border-[0.7px] border-gray-700 bg-[#1c1c1f] text-[#ecedee]">
                            <h3 className="text-xs font-semibold">Introducing Code-Leveling 🔥</h3>
                        </div>
                    </div>
                </div>

                {/* Links and Buttons */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/docs"><h3
                        className={`transition-all cursor-pointer ${getLinkStyle('/docs')}`}
                        style={{ fontFamily: "Montserrat, serif" }}
                    >
                        Docs
                    </h3></Link>
                    <Link href="/about"><h3
                        className={`transition-all cursor-pointer ${getLinkStyle('/about')}`}
                        style={{ fontFamily: "Montserrat, serif" }}
                    >
                        About
                    </h3></Link>
                    <Link href="/leaderboard"> <h3
                        className={`transition-all cursor-pointer ${getLinkStyle('/leaderboard')}`}
                        style={{ fontFamily: "Montserrat, serif" }}
                    >
                        Leaderboard
                    </h3></Link>
                    <div className="px-3 py-1 flex items-center rounded-3xl border-[0.5px] cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all border-gray-700">
                        <Image src="https://i.ibb.co/4NjcSnQ/github.png" alt="github logo" height={20} width={20} />
                        <h3 className="text-[#fff] ml-2 font-semibold" style={{ fontFamily: "Montserrat, serif" }}>GitHub</h3>
                    </div>
                    <div className="px-3 py-1 flex items-center rounded-3xl border-[0.5px] cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all border-gray-700">
                        <Image src="https://i.ibb.co/NmndwN9/discord.png" alt="discord logo" height={20} width={20} />
                        <h3 className="text-[#fff] ml-2 font-semibold" style={{ fontFamily: "Montserrat, serif" }}>Discord</h3>
                    </div>
                    <div className="px-2 py-2 flex items-center justify-center rounded-3xl border-[0.5px] cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all border-gray-700">
                        <a href="/api/auth/login"><Image src="https://i.ibb.co/2d8MDpx/profile-user.png" alt="profile logo" height={30} width={20} /></a>
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
                    <div className="w-64 bg-gray-900 h-full shadow-md p-4">
                        <button
                            className="text-white mb-4 hover:text-gray-400"
                            onClick={toggleSidebar}
                        >
                            Close
                        </button>
                        <ul className="space-y-4">
                            <li className={`cursor-pointer ${getLinkStyle('/docs')}`}>Docs</li>
                            <li className={`cursor-pointer ${getLinkStyle('/about')}`}>About</li>
                            <li className={`cursor-pointer ${getLinkStyle('/leaderboard')}`}>Leaderboard</li>
                            <li className="text-white hover:text-gray-400 cursor-pointer">GitHub</li>
                            <li className="text-white hover:text-gray-400 cursor-pointer">Discord</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
