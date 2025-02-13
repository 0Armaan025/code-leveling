import React, { useState, useEffect } from 'react';
import { FaHeart, FaBolt, FaTrophy, FaStar, FaGift, FaCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Sub-components for better organization
interface PlayerStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  health: number;
  mana: number;
  challengesCompleted: number;
}

const StatsTab = ({ playerStats }: { playerStats: PlayerStats }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1 className="text-2xl font-bold text-center mb-6">PLAYER STATS</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { icon: <FaStar className="text-yellow-400 text-2xl" />, label: `Level: ${playerStats.level}` },
        { icon: <FaTrophy className="text-blue-400 text-2xl" />, label: `Challenges: ${playerStats.challengesCompleted}` },
        { icon: <FaHeart className="text-red-400 text-2xl" />, label: `Health: ${playerStats.health}%` },
        { icon: <FaBolt className="text-yellow-400 text-2xl" />, label: `Mana: ${playerStats.mana}%` },
      ].map((stat, index) => (
        <div key={index} className="p-4 dark:bg-gray-800 bg-gray-200 rounded-lg flex items-center space-x-3">
          {stat.icon}
          <p className="text-lg font-bold">{stat.label}</p>
        </div>
      ))}
      <div className="p-4 dark:bg-gray-800 bg-gray-200 rounded-lg col-span-2">
        <p className="text-lg font-bold">XP: {playerStats.xp} / {playerStats.xpToNextLevel}</p>
        <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden mt-2">
          <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${(playerStats.xp / playerStats.xpToNextLevel) * 100}%` }}></div>
        </div>
      </div>
    </div>
  </motion.div>
);

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  xp: number;
}

const TasksTab = ({ tasks }: { tasks: Task[] }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1 className="text-2xl font-bold text-center mb-6">TASKS</h1>
    {tasks.map(task => (
      <motion.div key={task.id} whileHover={{ scale: 1.02 }} className="p-4 border rounded-lg mb-2 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700 hover:bg-gray-300 transition">
        <h2 className="font-bold">{task.title}</h2>
        <p>{task.description}</p>
        <span className={`px-2 py-1 rounded text-sm text-white ${task.status === 'PENDING' ? 'bg-red-600' : 'bg-green-700'}`}>{task.status}</span>
        <p>XP: {task.xp}</p>
      </motion.div>
    ))}
  </motion.div>
);

interface Achievement {
  id: number;
  title: string;
  value: string;
}

const AchievementsTab = ({ achievements }: { achievements: Achievement[] }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1 className="text-2xl font-bold text-center mb-6">ACHIEVEMENTS</h1>
    {achievements.map(ach => (
      <motion.div key={ach.id} whileHover={{ scale: 1.02 }} className="p-4 border rounded-lg mb-2 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700 hover:bg-gray-300 transition">
        <h2 className="font-bold">{ach.title}</h2>
        <p>{ach.value}</p>
      </motion.div>
    ))}
  </motion.div>
);

const UpgradesTab = ({ randomChallenge, solutionLink, setSolutionLink }: { randomChallenge: string, solutionLink: string, setSolutionLink: React.Dispatch<React.SetStateAction<string>> }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
    <h1 className="text-2xl font-bold mb-6">UPGRADES</h1>
    <p className="text-lg font-bold text-yellow-400">🔥 Very Hard Coding Challenge 🔥</p>
    <p className="mt-2 text-gray-300">{randomChallenge}</p>
    <div className="mt-4 flex flex-col w-full sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 justify-center">
      <input
        type="text"
        placeholder="Paste your solution link..."
        value={solutionLink}
        onChange={(e) => setSolutionLink(e.target.value)}
        className="p-2 border border-cyan-500 rounded-lg bg-gray-800 text-white w-full sm:w-auto"
      />
      <button
        onClick={() => alert("Congratulations! You're the architect of the system for a day!")}
        className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold w-full sm:w-auto"
      >
        Submit
      </button>
    </div>
    <p className="mt-4 text-green-400 font-bold">🎉 Prize: Become the architect of the system for a day or two! 🎉</p>
  </motion.div>
);

const NotificationsTab = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1 className="text-2xl font-bold text-center mb-6">NOTIFICATIONS</h1>
    <div className="space-y-4">
      {[
        { icon: <FaStar className="text-yellow-400 text-2xl" />, title: "New Challenge Available!", description: "Check out the latest coding challenge and test your skills.", time: "2 hours ago" },
        { icon: <FaTrophy className="text-green-400 text-2xl" />, title: "Achievement Unlocked!", description: "Congratulations! You've completed the 'Max Streak' achievement.", time: "1 day ago" },
        { icon: <FaHeart className="text-red-400 text-2xl" />, title: "Health Low!", description: "Your health is below 20%. Take a break and recharge.", time: "3 days ago" },
        { icon: <FaGift className="text-purple-400 text-2xl" />, title: "Dungeon Cleared!", description: "Congratulations! You just cleared the dungeon.", reward: "50 XP and 1 Health Potion", time: "5 days ago" },
      ].map((notification, index) => (
        <motion.div key={index} whileHover={{ scale: 1.02 }} className="p-4 border rounded-lg dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700 hover:bg-gray-300 transition flex items-center space-x-3">
          {notification.icon}
          <div>
            <h2 className="font-bold">{notification.title}</h2>
            <p>{notification.description}</p>
            {notification.reward && <p>Reward: <span className="font-bold text-green-400">{notification.reward}</span></p>}
            <span className="text-sm text-gray-500">{notification.time}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const LabPageComponent = () => {
  const [activeTab, setActiveTab] = useState('stats');
  const [solutionLink, setSolutionLink] = useState('');
  const [playerStats, setPlayerStats] = useState({
    level: 5,
    xp: 1200,
    xpToNextLevel: 2000,
    health: 100,
    mana: 150,
    challengesCompleted: 10,
  });

  const codingChallenges = [
    "Implement a fully functional programming language in under 100 lines of code.",
    "Write an AI that can solve any LeetCode problem better than you.",
    "Develop a blockchain-based todo list that mines its own coins.",
    "Create a web app that predicts your next bug before you even write it.",
    "Reverse-engineer a black-box ML model using only console.log() statements.",
    "Optimize an O(n^3) algorithm to run in O(1) using quantum mechanics.",
  ];

  const randomChallenge = codingChallenges[Math.floor(Math.random() * codingChallenges.length)];

  const tasks = [
    { id: 1, title: "Code for 10 Hours", description: "Complete 10 hours of coding without any distractions.", status: "PENDING", xp: 100 },
    { id: 2, title: "Code for 3 Days Without Break", description: "Work on your project for three straight days without taking a break.", status: "DONE", xp: 300 },
  ];

  const achievements = [
    { id: 1, title: "Max Streak", value: "7 Days" },
    { id: 2, title: "Max Time in One Go", value: "12 Hours" },
    { id: 3, title: "Total Time Coded", value: "250 Hours" },
    { id: 4, title: "Languages Used", value: "JavaScript, Python, C++" },
    { id: 5, title: "Used the Language C", value: "Welcome to the 1970s!" },
    { id: 6, title: "Used the Language Rust", value: "Safe and sound, but where's the memory leak?" },
  ];

  // Simulate dynamic data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerStats(prev => ({
        ...prev,
        xp: prev.xp + 10,
        health: Math.min(100, prev.health + 1),
        mana: Math.min(150, prev.mana + 2),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 dark:bg-black bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
      <div className="relative w-full sm:w-[978px] h-auto sm:h-[580px] dark:bg-black/90 bg-white/90 border-2 border-black dark:border-gray-700 rounded-[30px] shadow-2xl p-4 backdrop-blur-xl flex flex-col sm:flex-row overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-full sm:w-[220px] dark:bg-gradient-to-b dark:from-gray-800/80 dark:to-black/90 bg-gradient-to-b from-gray-200 to-white border-b-2 sm:border-r-4 border-blue-700/40 dark:border-gray-800 dark:border-b-2 p-6 flex flex-col space-y-6 text-white font-mono text-lg">
          {['stats', 'tasks', 'achievements', 'notifications', 'upgrades'].map(tab => (
            <motion.div key={tab} whileHover={{ scale: 1.05 }} onClick={() => setActiveTab(tab)}
              className={`p-3 sm:p-5 bg-slate-800 rounded-lg text-center cursor-pointer transition font-extrabold shadow-lg hover:shadow-cyan-500/50 ${activeTab === tab ? 'border-2 border-cyan-400' : ''}`}>
              {tab.toUpperCase()}
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative flex-1 dark:bg-black/80 bg-slate-100 rounded-xl shadow-inner p-8 dark:text-cyan-300 text-black font-mono text-md overflow-y-auto border-b-4 sm:border-l-4 border-blue-700/20">
          <AnimatePresence mode="wait">
            {activeTab === 'stats' && <StatsTab playerStats={playerStats} />}
            {activeTab === 'tasks' && <TasksTab tasks={tasks} />}
            {activeTab === 'achievements' && <AchievementsTab achievements={achievements} />}
            {activeTab === 'upgrades' && <UpgradesTab randomChallenge={randomChallenge} solutionLink={solutionLink} setSolutionLink={setSolutionLink} />}
            {activeTab === 'notifications' && <NotificationsTab />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LabPageComponent;