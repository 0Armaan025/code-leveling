import React, { useState, useEffect } from "react";
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

const DashboardPageComponent = () => {
    const [selectedProject, setSelectedProject] = useState("All Projects");
    const [selectedTimeRange, setSelectedTimeRange] = useState("Weekly");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Mock data for charts
    const weeklyData = [
        { name: "Mon", hours: 4 },
        { name: "Tue", hours: 6 },
        { name: "Wed", hours: 5 },
        { name: "Thu", hours: 7 },
        { name: "Fri", hours: 8 },
        { name: "Sat", hours: 3 },
        { name: "Sun", hours: 2 },
    ];

    const monthlyData = [
        { name: "Week 1", hours: 20 },
        { name: "Week 2", hours: 25 },
        { name: "Week 3", hours: 30 },
        { name: "Week 4", hours: 22 },
    ];

    const yearlyData = [
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
    ];

    const projectData = [
        { name: "Project A", hours: 300 },
        { name: "Project B", hours: 450 },
        { name: "Project C", hours: 200 },
    ];

    const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProject(event.target.value);
    };

    const handleTimeRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTimeRange(event.target.value);
    };

    const getChartData = () => {
        switch (selectedTimeRange) {
            case "Weekly":
                return weeklyData;
            case "Monthly":
                return monthlyData;
            case "Yearly":
                return yearlyData;
            default:
                return weeklyData;
        }
    };

    const mostWorkedProject = projectData.reduce((prev, current) =>
        prev.hours > current.hours ? prev : current
    );

    if (!isClient) {
        return null; // or a loading spinner
    }

    return (
        <div className="dashboardPage min-h-screen p-4 bg-black flex items-start justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

            {/* Main Container */}
            <div className="relative w-full max-w-[1000px] bg-black/90 rounded-xl border-2 border-blue-500/30 shadow-xl p-6 backdrop-blur-xl">
                {/* Holographic Effects */}
                <div className="absolute inset-0 rounded-xl border-2 border-blue-500/20 animate-border-pulse"></div>
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 animate-text-shimmer">
                            SYSTEM DASHBOARD
                        </h1>
                        <p className="text-sm text-cyan-400/80 font-mono">Performance Analytics Interface</p>
                    </div>
                    <div className="flex space-x-3">
                        <div className="bg-gradient-to-r from-black/80 to-black/60 p-[1px] rounded-lg border border-blue-500/30">
                            <select
                                value={selectedTimeRange}
                                onChange={handleTimeRangeChange}
                                className="w-full px-3 py-1.5 bg-black/80 rounded-lg text-cyan-300 focus:outline-none font-mono text-sm appearance-none z-10"
                            >
                                <option value="Weekly">LAST 7 DAYS</option>
                                <option value="Monthly">MONTHLY</option>
                                <option value="Yearly">YEARLY</option>
                            </select>
                        </div>
                        <div className="bg-gradient-to-r from-black/80 to-black/60 p-[1px] rounded-lg border border-blue-500/30">
                            <select
                                value={selectedProject}
                                onChange={handleProjectChange}
                                className="w-full px-3 py-1.5 bg-black/80 rounded-lg text-cyan-300 focus:outline-none font-mono text-sm appearance-none z-10"
                            >
                                <option value="All Projects">ALL PROJECTS</option>
                                {projectData.map((project) => (
                                    <option key={project.name} value={project.name}>
                                        {project.name.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Bar Chart */}
                    <div className="bg-black/80 p-4 rounded-lg border-2 border-blue-500/20">
                        <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-mono mb-3">
                            CODING HOURS ({selectedTimeRange.toUpperCase()})
                        </h2>
                        <BarChart width={400} height={250} data={getChartData()}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1E3A8A" />
                            <XAxis dataKey="name" stroke="#3B82F6" />
                            <YAxis stroke="#3B82F6" />
                            <Tooltip contentStyle={{ backgroundColor: "#1E1E1E", borderColor: "#3B82F6" }} />
                            <Legend />
                            <Bar dataKey="hours" fill="#3B82F6" />
                        </BarChart>
                    </div>

                    {/* Pie Chart */}
                    <div className="bg-black/80 p-4 rounded-lg border-2 border-blue-500/20">
                        <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-mono mb-3">
                            PROJECT DISTRIBUTION
                        </h2>
                        <PieChart width={400} height={250}>
                            <Pie
                                data={projectData}
                                dataKey="hours"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#3B82F6"
                                label
                            >
                                {projectData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={["#3B82F6", "#60A5FA", "#93C5FD"][index % 3]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: "#1E1E1E", borderColor: "#3B82F6" }} />
                            <Legend />
                        </PieChart>
                    </div>

                    {/* Line Chart */}
                    <div className="bg-black/80 p-4 rounded-lg border-2 border-blue-500/20 col-span-2">
                        <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-mono mb-3">
                            CODING TRENDS ({selectedTimeRange.toUpperCase()})
                        </h2>
                        <LineChart width={900} height={250} data={getChartData()}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1E3A8A" />
                            <XAxis dataKey="name" stroke="#3B82F6" />
                            <YAxis stroke="#3B82F6" />
                            <Tooltip contentStyle={{ backgroundColor: "#1E1E1E", borderColor: "#3B82F6" }} />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="hours"
                                stroke="#3B82F6"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </div>
                </div>

                {/* Most Worked-On Project */}
                <div className="mt-6 bg-black/80 p-4 rounded-lg border-2 border-blue-500/20">
                    <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-mono mb-2">
                        MOST WORKED-ON PROJECT
                    </h2>
                    <p className="text-cyan-300 font-mono">
                        {mostWorkedProject.name.toUpperCase()} - {mostWorkedProject.hours} HOURS
                    </p>
                </div>

                {/* System Footer */}
                <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <div className="flex justify-between items-center text-sm text-cyan-500/50 font-mono">
                        <div className="flex items-center gap-2">
                            <span className="animate-pulse">◈</span>
                            TOTAL HOURS: {getChartData().reduce((sum, item) => sum + item.hours, 0)}
                        </div>
                        <div>
                            SYSTEM STATUS: <span className="text-green-500/80">OPERATIONAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPageComponent;
