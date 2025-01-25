"use client";
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

const LeaderboardPage = (props: Props) => {
    const [rankingPeriod, setRankingPeriod] = useState<'weekly' | 'all-time'>('weekly');
    const [filter, setFilter] = useState<'devbits' | 'coding-time' | 'language'>('devbits');
    const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

    // Mock leaderboard data
    const leaderboardData = [
        { rank: 1, name: 'Armaan', devbits: 1500, codingTime: '120h', language: 'JavaScript' },
        { rank: 2, name: 'Alice', devbits: 1400, codingTime: '110h', language: 'Python' },
        { rank: 3, name: 'Bob', devbits: 1300, codingTime: '100h', language: 'TypeScript' },
        { rank: 4, name: 'Charlie', devbits: 1200, codingTime: '90h', language: 'Java' },
        { rank: 5, name: 'Diana', devbits: 1100, codingTime: '80h', language: 'C++' },
    ];

    // Available languages for the dropdown
    const languages = ['All', 'JavaScript', 'Python', 'TypeScript', 'Java', 'C++'];

    // Filtered data based on selected language
    const filteredData = selectedLanguage === 'All'
        ? leaderboardData
        : leaderboardData.filter(user => user.language === selectedLanguage);

    // Today's Shoutout Data
    const todaysShoutout = [
        { name: 'Armaan', description: 'For creating an amazing platform!', avatar: 'https://i.ibb.co/2d8MDpx/profile-user.png' },
        { name: 'Alice', description: 'For contributing to open-source projects.', avatar: 'https://i.ibb.co/2d8MDpx/profile-user.png' },
        { name: 'Bob', description: 'For solving 100+ coding challenges.', avatar: 'https://i.ibb.co/2d8MDpx/profile-user.png' },
        { name: 'Charlie', description: 'For mentoring new developers.', avatar: 'https://i.ibb.co/2d8MDpx/profile-user.png' },
        { name: 'Diana', description: 'For building a game in C++.', avatar: 'https://i.ibb.co/2d8MDpx/profile-user.png' },
    ];

    return (
        <>
            <div className="leaderboardPage min-h-screen p-8 bg-gradient-to-br from-gray-900 to-black">
                {/* Heading */}
                <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, serif' }}>
                    Leaderboard
                </h1>

                {/* Ranking Period Dropdown */}
                <div className="mb-8">
                    <label htmlFor="rankingPeriod" className="block text-sm font-medium text-gray-400">
                        Ranking Period
                    </label>
                    <select
                        id="rankingPeriod"
                        value={rankingPeriod}
                        onChange={(e) => setRankingPeriod(e.target.value as 'weekly' | 'all-time')}
                        className="mt-1 block w-48 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                        <option value="weekly">Weekly</option>
                        <option value="all-time">All-Time</option>
                    </select>
                </div>

                {/* Filter Buttons */}
                <div className="flex space-x-4 mb-8">
                    <button
                        onClick={() => setFilter('devbits')}
                        className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-all ${filter === 'devbits'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                            }`}
                    >
                        <img src="https://i.ibb.co/4NjcSnQ/github.png" alt="DevBits Icon" className="w-5 h-5" />
                        <span>DevBits</span>
                    </button>
                    <button
                        onClick={() => setFilter('coding-time')}
                        className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-all ${filter === 'coding-time'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                            }`}
                    >
                        <img src="https://i.ibb.co/2d8MDpx/profile-user.png" alt="Coding Time Icon" className="w-5 h-5" />
                        <span>Coding Time</span>
                    </button>
                    <button
                        onClick={() => setFilter('language')}
                        className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-all ${filter === 'language'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                            }`}
                    >
                        <img src="https://i.ibb.co/NmndwN9/discord.png" alt="Language Icon" className="w-5 h-5" />
                        <span>Language</span>
                    </button>
                </div>

                {/* Language Dropdown (Visible only when Language filter is selected) */}
                {filter === 'language' && (
                    <div className="mb-8">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-400">
                            Select Language
                        </label>
                        <select
                            id="language"
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="mt-1 block w-48 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Leaderboard Table */}
                <div className="overflow-x-auto mb-12">
                    <table className="min-w-full bg-gray-800 rounded-lg shadow-lg">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Rank
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    {filter === 'devbits' && 'DevBits'}
                                    {filter === 'coding-time' && 'Coding Time'}
                                    {filter === 'language' && 'Language'}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {filteredData.map((user) => (
                                <tr key={user.rank} className="hover:bg-gray-600 transition-all cursor-pointer">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                        #{user.rank}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                        {filter === 'devbits' && (
                                            <div className="flex flex-row p-2 justify-start items-center">
                                                {user.devbits}
                                                <Image src="https://i.ibb.co/BjXmDmL/New-Project-7-removebg-preview.png" alt="devbit currency" className="ml-2" height={24} width={24} />
                                            </div>
                                        )}
                                        {filter === 'coding-time' && user.codingTime}
                                        {filter === 'language' && user.language}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Today's Shoutout Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, serif' }}>
                        Today's Shoutout Goes To:
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {todaysShoutout.map((person, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl "
                            >
                                <div className="flex items-center space-x-4 cursor-pointer">
                                    <Image
                                        src={person.avatar}
                                        alt={person.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                                        <p className="text-gray-400">{person.description}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-full">
                                        Shoutout 🎉
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeaderboardPage;
