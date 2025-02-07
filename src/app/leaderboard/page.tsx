"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Props = {};

const LeaderboardPage = (props: Props) => {
    const [rankingPeriod, setRankingPeriod] = useState<"weekly" | "all-time">("weekly");
    const [filter, setFilter] = useState<"devbits" | "coding-time" | "language">("devbits");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
    const [leaderboardData, setLeaderboardData] = useState<any[]>([]);
    const [shoutouts, setShoutouts] = useState<any[]>([]);

    useEffect(() => {
        setLeaderboardData([
            { rank: 1, name: "Armaan", devbits: 1500, codingTime: "120h", language: "JavaScript" },
            { rank: 2, name: "Alice", devbits: 1400, codingTime: "110h", language: "Python" },
            { rank: 3, name: "Bob", devbits: 1300, codingTime: "100h", language: "TypeScript" },
        ]);
        setShoutouts([
            { name: "Armaan", description: "For creating an amazing platform!", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
            { name: "Alice", description: "For contributing to open-source projects.", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
            { name: "Bob", description: "For solving 100+ coding challenges.", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
            { name: "Charlie", description: "For mentoring new developers.", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
            { name: "Diana", description: "For building a game in C++.", avatar: "https://i.ibb.co/2d8MDpx/profile-user.png" },
        ]);
    }, []);

    const languages = ["All", "JavaScript", "Python", "TypeScript", "Java", "C++"];

    const filteredData =
        selectedLanguage === "All" ? leaderboardData : leaderboardData.filter((user) => user.language === selectedLanguage);

    return (
        <>
            <div className="leaderboardPage min-h-screen p-8 dark:bg-black bg-gradient-to-r from-sky-300 to-indigo-400 dark:from-gray-900 dark:to-gray-800">
                <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-500" style={{ fontFamily: "Montserrat, serif" }}>
                    Leaderboard
                </h1>

                {/* Ranking Period Dropdown */}
                <div className="mb-8">
                    <label htmlFor="rankingPeriod" className="block text-sm font-medium text-gray-900 dark:text-gray-400">
                        Ranking Period
                    </label>
                    <select
                        id="rankingPeriod"
                        value={rankingPeriod}
                        onChange={(e) => setRankingPeriod(e.target.value as "weekly" | "all-time")}
                        className="mt-1 block w-48 px-4 py-2 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md text-black dark:text-white focus:ring-1 focus:ring-purple-500 outline-none"
                    >
                        <option value="weekly">Weekly</option>
                        <option value="all-time">All-Time</option>
                    </select>
                </div>

                {/* Filter Buttons */}
                <div className="flex md:space-x-4 mb-8 flex-wrap gap-2">
                    {["devbits", "coding-time", "language"].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type as "devbits" | "coding-time" | "language")}
                            className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-all shadow ${filter === type
                                ? "bg-purple-500 text-white"
                                : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
                                }`}
                        >
                            <span className="capitalize">{type.replace("-", " ")}</span>
                        </button>
                    ))}
                </div>

                {/* Leaderboard Table */}
                <div className="overflow-x-auto mb-12 rounded-xl">
                    <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
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
                                <tr key={user.rank} className={`border-b border-gray-300 dark:border-gray-700 ${index % 2 === 0 ? "bg-gray-100 dark:bg-gray-700" : "bg-white dark:bg-gray-800"} hover:bg-gray-200 dark:hover:bg-gray-600 transition-all`}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">#{user.rank}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{user.name}</td>
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
            </div>
        </>
    );
};

export default LeaderboardPage;
