"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const LeaderboardPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [rankingPeriod, setRankingPeriod] = useState<"weekly" | "all-time">("weekly");
    const [filter, setFilter] = useState<"devbits" | "coding-time" | "language">("devbits");
    const [selectedLanguage, setSelectedLanguage] = useState<"All" | "JavaScript" | "Python" | "TypeScript">("All");

    const leaderboardData = [
        { rank: 1, name: "Armaan", devbits: 1500, codingTime: "120h", language: "JavaScript" },
        { rank: 2, name: "Alice", devbits: 1400, codingTime: "110h", language: "Python" },
        { rank: 3, name: "Bob", devbits: 1300, codingTime: "100h", language: "TypeScript" },
    ];

    const shoutouts = [
        { name: "Armaan", description: "For creating an amazing platform!", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
        { name: "Alice", description: "For contributing to open-source projects.", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
        { name: "Bob", description: "For solving 100+ coding challenges.", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
        { name: "Charlie", description: "For mentoring new developers.", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
        { name: "Diana", description: "For building a game in C++.", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
    ];

    const [filteredData, setFilteredData] = useState(leaderboardData);

    useEffect(() => {
        setIsMounted(true);
    
        let data = leaderboardData;
        
        // Filter based on selected language
        if (selectedLanguage !== "All") {
            data = leaderboardData.filter((user) => user.language === selectedLanguage);
        }
    
        // Assign ranks sequentially
        const reRankedData = data.map((user, index) => ({ ...user, rank: index + 1 }));
    
        setFilteredData(reRankedData);
    }, [selectedLanguage]);
    

    if (!isMounted) return null; // Prevent SSR hydration issues

    return (
        <div className="leaderboardPage min-h-screen p-8 dark:bg-black bg-white">
            <h1 className="md:text-5xl text-4xl font-extrabold mb-8 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-500">
                Leaderboard 🏆
            </h1>

            {/* Ranking Period Dropdown */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
                <div>
                    <label htmlFor="rankingPeriod" className="block text-sm font-medium text-gray-800 dark:text-gray-400">
                        Ranking Period
                    </label>
                    <select
                        id="rankingPeriod"
                        value={rankingPeriod}
                        onChange={(e) => setRankingPeriod(e.target.value as "weekly" | "all-time")}
                        className="mt-1 block w-48 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg shadow-md text-black dark:text-white focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="weekly">Weekly</option>
                        <option value="all-time">All-Time</option>
                    </select>
                </div>

                {/* Conditionally render Language Filter Dropdown */}
                {filter === "language" && (
                    <div>
                        <label htmlFor="languageFilter" className="block text-sm font-medium text-gray-800 dark:text-gray-400">
                            Filter by Language
                        </label>
                        <select
                            id="languageFilter"
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value as "All" | "JavaScript" | "Python" | "TypeScript")}
                            className="mt-1 block w-48 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg shadow-md text-black dark:text-white focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="All">All</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="TypeScript">TypeScript</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
                {["devbits", "coding-time", "language"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type as "devbits" | "coding-time" | "language")}
                        className={`px-4 py-2 rounded-lg font-medium transition-all shadow-lg transform hover:scale-105 ${
                            filter === type
                                ? "bg-purple-600 text-white shadow-lg"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                        }`}
                    >
                        {type.replace("-", " ")}
                    </button>
                ))}
            </div>

            {/* Leaderboard Table */}
            <div className="overflow-x-auto mb-12 rounded-xl">
                <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-400 dark:border-gray-700">
                    <thead>
                        <tr className="bg-gray-300 dark:bg-gray-900 border-b border-gray-400 dark:border-gray-700">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 dark:text-gray-400 uppercase">Rank</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 dark:text-gray-400 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 dark:text-gray-400 uppercase">
                                {filter === "devbits" && "DevBits"}
                                {filter === "coding-time" && "Coding Time"}
                                {filter === "language" && "Language"}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, index) => (
                            <tr
                                key={user.rank}
                                className={`border-b border-gray-300 dark:border-gray-700 transition-all ${
                                    index % 2 === 0 ? "bg-gray-200 dark:bg-gray-700" : "bg-white dark:bg-gray-800"
                                } hover:bg-blue-300 dark:hover:bg-gray-600`}
                            >
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">#{user.rank}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                                    <Link href={`/user/${user.name}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                        {user.name}
                                    </Link>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                                    {filter === "devbits" && user.devbits}
                                    {filter === "coding-time" && user.codingTime}
                                    {filter === "language" && user.language}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Shoutouts Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Shoutouts 🎉</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {shoutouts.map((shoutout, index) => (
                        <div key={index} className="p-4 bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md flex items-center gap-4 hover:scale-105 transition-all">
                            <Image src={shoutout.avatar} alt={shoutout.name} width={50} height={50} className="rounded-full" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{shoutout.name}</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{shoutout.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;
