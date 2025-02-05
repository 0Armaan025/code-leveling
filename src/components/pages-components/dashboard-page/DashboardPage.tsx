import React, { useState, useEffect } from "react";
// import { EyeIcon, EyeOffIcon } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    CartesianGrid,
} from "recharts";

const generateRandomApiKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let apiKey = "";
    for (let i = 0; i < 32; i++) {
        apiKey += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return apiKey;
};

const DashboardPageComponent = () => {
    const [selectedProject, setSelectedProject] = useState("All Projects");
    const [selectedTimeRange, setSelectedTimeRange] = useState("Monthly");
    const [isClient, setIsClient] = useState(false);
    const [apiKey, setApiKey] = useState(generateRandomApiKey());
    const [showApiKey, setShowApiKey] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleApiKeyVisibility = () => {
        setShowApiKey(!showApiKey);
    };

    const updateApiKey = () => {
        setApiKey(generateRandomApiKey());
    };

    if (!isClient) return null;

    const timeRangeOptions = ["Last 7 Days", "Monthly", "Yearly"];
    const projectOptions = ["All Projects", "Project A", "Project B", "Project C"];

    const allData = {
        Last_7_Days: [
            { name: "Mon", hours: 4 },
            { name: "Tue", hours: 6 },
            { name: "Wed", hours: 5 },
            { name: "Thu", hours: 7 },
            { name: "Fri", hours: 8 },
            { name: "Sat", hours: 3 },
            { name: "Sun", hours: 2 },
        ],
        Monthly: [
            { name: "Week 1", hours: 20 },
            { name: "Week 2", hours: 25 },
            { name: "Week 3", hours: 30 },
            { name: "Week 4", hours: 22 },
        ],
        Yearly: [
            { name: "Jan", hours: 100 },
            { name: "Feb", hours: 120 },
            { name: "Mar", hours: 90 },
            { name: "Apr", hours: 110 },
            { name: "May", hours: 130 },
            { name: "Jun", hours: 140 },
            { name: "Jul", hours: 150 },
            { name: "Aug", hours: 160 },
            { name: "Sep", hours: 170 },
            { name: "Oct", hours: 180 },
            { name: "Nov", hours: 190 },
            { name: "Dec", hours: 200 },
        ],
    };

    const projectData = [
        { name: "Project A", hours: 300 },
        { name: "Project B", hours: 450 },
        { name: "Project C", hours: 200 },
    ];

    const languageUsage = [
        { name: "JavaScript", hours: 150 },
        { name: "Python", hours: 120 },
        { name: "Java", hours: 80 },
        { name: "C++", hours: 40 },
        { name: "Ruby", hours: 30 },
    ];

    const getChartData = () => {
        const formattedKey = selectedTimeRange.replace(/\s+/g, "_") as keyof typeof allData;
        return allData[formattedKey] || allData.Last_7_Days;
    };

    const mostWorkedProject = projectData.reduce((prev, current) => (prev.hours > current.hours ? prev : current));

    return (
        <div className="dashboardPage min-h-screen p-4 bg-white dark:bg-black flex items-start justify-center relative overflow-hidden">
        <div className="relative w-full max-w-[1000px] bg-white/90 dark:bg-black/90 rounded-xl border-2 border-blue-500/30 shadow-xl p-6 backdrop-blur-xl">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">SYSTEM DASHBOARD</h1>
                <div className="flex space-x-3">
                    <select value={selectedTimeRange} onChange={(e) => setSelectedTimeRange(e.target.value)} 
                        className="bg-white dark:bg-black text-blue-600 dark:text-cyan-300 px-3 py-1.5 rounded-lg border border-blue-500">
                        {timeRangeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)} 
                        className="bg-white dark:bg-black text-blue-600 dark:text-cyan-300 px-3 py-1.5 rounded-lg border border-blue-500">
                        {projectOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-black p-4 rounded-lg border border-blue-500">
                    <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">CODING HOURS ({selectedTimeRange.toUpperCase()})</h2>
                    <BarChart width={400} height={250} data={getChartData()}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E3A8A" />
                        <XAxis dataKey="name" stroke="#3B82F6" />
                        <YAxis stroke="#3B82F6" />
                        <Tooltip contentStyle={{ backgroundColor: "#F3F4F6", color: "#000" }} wrapperStyle={{ backgroundColor: "#1E1E1E", color: "#FFF" }} />
                        <Legend />
                        <Bar dataKey="hours" fill="#3B82F6" />
                    </BarChart>
                </div>
                <div className="bg-white dark:bg-black p-4 rounded-lg border border-blue-500">
                    <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">PROJECT DISTRIBUTION</h2>
                    <PieChart width={400} height={250}>
                        <Pie data={projectData} dataKey="hours" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                            {projectData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={["#3B82F6", "#60A5FA", "#93C5FD"][index % 3]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "#F3F4F6", color: "#000" }} wrapperStyle={{ backgroundColor: "#1E1E1E", color: "#FFF" }} />
                        <Legend />
                    </PieChart>
                </div>
                <div className="bg-white dark:bg-black p-4 rounded-lg border border-blue-500 col-span-2">
                    <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">CODING TRENDS ({selectedTimeRange.toUpperCase()})</h2>
                    <LineChart width={900} height={250} data={getChartData()}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E3A8A" />
                        <XAxis dataKey="name" stroke="#3B82F6" />
                        <YAxis stroke="#3B82F6" />
                        <Tooltip contentStyle={{ backgroundColor: "#F3F4F6", color: "#000" }} wrapperStyle={{ backgroundColor: "#1E1E1E", color: "#FFF" }} />
                        <Legend />
                        <Line type="monotone" dataKey="hours" stroke="#3B82F6" strokeWidth={2} />
                    </LineChart>
                </div>
                <div className="bg-white dark:bg-black p-4 rounded-lg border border-blue-500">
                    <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">LANGUAGE USAGE</h2>
                    <BarChart width={400} height={250} data={languageUsage}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E3A8A" />
                        <XAxis dataKey="name" stroke="#3B82F6" />
                        <YAxis stroke="#3B82F6" />
                        <Tooltip contentStyle={{ backgroundColor: "#F3F4F6", color: "#000" }} wrapperStyle={{ backgroundColor: "#1E1E1E", color: "#FFF" }} />
                        <Legend />
                        <Bar dataKey="hours" fill="#60A5FA" />
                    </BarChart>
                </div>
                <div className="bg-white dark:bg-black p-4 rounded-lg border border-blue-500">
                    <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">LANGUAGE USAGE PERCENTAGE</h2>
                    <PieChart width={400} height={250}>
                        <Pie data={languageUsage} dataKey="hours" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                            {languageUsage.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={["#3B82F6", "#60A5FA", "#93C5FD", "#FBBF24", "#F472B6"][index % 5]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "#F3F4F6", color: "#000" }} wrapperStyle={{ backgroundColor: "#1E1E1E", color: "#FFF" }} />
                        <Legend />
                    </PieChart>
                </div>
            </div>
            <div className="mt-6 bg-white dark:bg-black p-4 rounded-lg border border-blue-500">
                <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400">MOST WORKED-ON PROJECT</h2>
                <p className="text-blue-600 dark:text-cyan-300">{mostWorkedProject.name.toUpperCase()} - {mostWorkedProject.hours} HOURS</p>
            </div>
        </div>
    </div>
    
    );
};

export default DashboardPageComponent;
