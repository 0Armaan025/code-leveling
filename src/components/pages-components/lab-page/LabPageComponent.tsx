import React, { useState } from 'react';
import { FaHeart, FaBolt, FaTrophy, FaStar } from 'react-icons/fa';

const LabPageComponent = () => {
    const [activeTab, setActiveTab] = useState('stats');

    // Mock data for tasks
    const tasks = [
        { id: 1, title: "Code for 10 Hours", description: "Complete 10 hours of coding without any distractions.", status: "PENDING", xp: 100 },
        { id: 2, title: "Code for 3 Days Without Break", description: "Work on your project for three straight days without taking a break.", status: "DONE", xp: 300 },
    ];

    // Mock data for player stats
    const playerStats = {
        level: 5,
        xp: 1200,
        xpToNextLevel: 2000,
        health: 100,
        mana: 150,
        challengesCompleted: 10,
    };

    // Mock data for achievements
    const achievements = [
        { id: 1, title: "Max Streak", value: "7 Days" },
        { id: 2, title: "Max Time in One Go", value: "12 Hours" },
        { id: 3, title: "Total Time Coded", value: "250 Hours" },
        { id: 4, title: "Languages Used", value: "JavaScript, Python, C++" },
        { id: 5, title: "Used the Language C", value: "Welcome to the 1970s!" },
        { id: 6, title: "Used the Language Rust", value: "Safe and sound, but where's the memory leak?" },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen p-4 dark:bg-black bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-transparent"></div>

            {/* Tablet Structure */}
            <div className="relative w-[900px] h-[500px] dark:bg-black/90 bg-white/90 border-4 border-blue-600/50 rounded-[30px] shadow-2xl p-4 backdrop-blur-xl flex overflow-hidden">
                {/* Left Sidebar */}
                <div className="w-[220px] dark:bg-gradient-to-b dark:from-gray-800/80 dark:to-black/90 bg-gradient-to-b from-gray-200 to-white border-r-4 border-blue-700/40 p-6 flex flex-col space-y-6 text-cyan-300 font-mono text-lg">
                    {['stats', 'tasks', 'achievements', 'upgrades'].map(tab => (
                        <div key={tab} onClick={() => setActiveTab(tab)}
                            className={`p-5 bg-gradient-to-r from-blue-800 to-cyan-600 rounded-lg text-center cursor-pointer hover:scale-105 transition font-extrabold shadow-lg hover:shadow-cyan-500/50 ${activeTab === tab ? 'border-2 border-cyan-400' : ''}`}>
                            {tab.toUpperCase()}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="relative flex-1 dark:bg-black/80 bg-white rounded-xl shadow-inner p-8 dark:text-cyan-300 text-blue-500 font-mono text-md overflow-y-auto border-l-4 border-blue-700/20">
                    {/* Stats Tab */}
                    {activeTab === 'stats' && (
                        <div>
                            <h1 className="text-xl font-bold text-center mb-4">PLAYER STATS</h1>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 dark:bg-gray-800 bg-gray-200 rounded-lg flex items-center space-x-3">
                                    <FaStar className="text-yellow-400 text-2xl" />
                                    <p className="text-lg font-bold">Level: {playerStats.level}</p>
                                </div>
                                <div className="p-4 dark:bg-gray-800 bg-gray-200 rounded-lg flex items-center space-x-3">
                                    <FaTrophy className="text-blue-400 text-2xl" />
                                    <p className="text-lg font-bold">Challenges: {playerStats.challengesCompleted}</p>
                                </div>
                                <div className="p-4 dark:bg-gray-800 bg-gray-200 rounded-lg col-span-2">
                                    <p className="text-lg font-bold">XP: {playerStats.xp} / {playerStats.xpToNextLevel}</p>
                                    <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden mt-2">
                                        <div className="bg-blue-500 h-full" style={{ width: `${(playerStats.xp / playerStats.xpToNextLevel) * 100}%` }}></div>
                                    </div>
                                </div>
                                <div className="p-4 dark:bg-gray-800 bg-gray-200 rounded-lg flex items-center space-x-3">
                                    <FaHeart className="text-red-400 text-2xl" />
                                    <p className="text-lg font-bold">Health: {playerStats.health}%</p>
                                </div>
                                <div className="p-4 dark:bg-gray-800 bg-gray-200 rounded-lg flex items-center space-x-3">
                                    <FaBolt className="text-yellow-400 text-2xl" />
                                    <p className="text-lg font-bold">Mana: {playerStats.mana}%</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tasks Tab */}
                    {activeTab === 'tasks' && (
                        <div>
                            <h1 className="text-xl font-bold text-center mb-4">TASKS</h1>
                            {tasks.map(task => (
                                <div key={task.id} className="p-4 border rounded-lg mb-2 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700 hover:bg-gray-300 transition">
                                    <h2 className="font-bold">{task.title}</h2>
                                    <p>{task.description}</p>
                                    <span className={`px-2 py-1 rounded text-sm text-white ${task.status === 'PENDING' ? 'bg-red-600' : 'bg-green-700'}`}>{task.status}</span>
                                    <p>XP: {task.xp}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Achievements Tab */}
                    {activeTab === 'achievements' && (
                        <div>
                            <h1 className="text-xl font-bold text-center mb-4">ACHIEVEMENTS</h1>
                            {achievements.map(ach => (
                                <div key={ach.id} className="p-4 border rounded-lg mb-2 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700 hover:bg-gray-300 transition">
                                    <h2 className="font-bold">{ach.title}</h2>
                                    <p>{ach.value}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LabPageComponent;
