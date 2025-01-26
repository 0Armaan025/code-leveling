import React, { useState } from "react";
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

    const [selectedProject, setSelectedProject] = useState("All Projects");
    const [selectedTimeRange, setSelectedTimeRange] = useState("Weekly");

    // Function to handle project selection
    const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProject(event.target.value);
    };

    // Function to handle time range selection
    const handleTimeRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTimeRange(event.target.value);
    };

    // Get data based on selected time range
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

    // Get most worked-on project
    const mostWorkedProject = projectData.reduce((prev, current) =>
        prev.hours > current.hours ? prev : current
    );

    return (
        <div className="dashboardPage min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8">
            <div
                className="relative w-[1200px]  bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-lg p-8"
                style={{
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-white">Coding Dashboard</h1>
                    <div className="flex space-x-4">
                        <select
                            value={selectedTimeRange}
                            onChange={handleTimeRangeChange}
                            className="bg-gray-700 text-white p-2 rounded-md"
                        >
                            <option value="Weekly">Last 7 Days</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                        <select
                            value={selectedProject}
                            onChange={handleProjectChange}
                            className="bg-gray-700 text-white p-2 rounded-md"
                        >
                            <option value="All Projects">All Projects</option>
                            {projectData.map((project) => (
                                <option key={project.name} value={project.name}>
                                    {project.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Bar Chart */}
                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-lg font-bold text-white mb-4">
                            Coding Hours ({selectedTimeRange})
                        </h2>
                        <BarChart width={500} height={300} data={getChartData()}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="hours" fill="#3b82f6" />
                        </BarChart>
                    </div>

                    {/* Pie Chart */}
                    <div className="bg-gray-700 p-6 rounded-lg">
                        <h2 className="text-lg font-bold text-white mb-4">
                            Project Distribution
                        </h2>
                        <PieChart width={500} height={300}>
                            <Pie
                                data={projectData}
                                dataKey="hours"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#3b82f6"
                                label
                            >
                                {projectData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={["#3b82f6", "#60a5fa", "#93c5fd"][index % 3]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>

                    {/* Line Chart */}
                    <div className="bg-gray-700 p-6 rounded-lg col-span-2">
                        <h2 className="text-lg font-bold text-white mb-4">
                            Coding Trends ({selectedTimeRange})
                        </h2>
                        <LineChart width={1100} height={300} data={getChartData()}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="hours"
                                stroke="#3b82f6"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </div>
                </div>

                {/* Most Worked-On Project */}
                <div className="mt-8 bg-gray-700 p-6 rounded-lg">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Most Worked-On Project
                    </h2>
                    <p className="text-white">
                        {mostWorkedProject.name} - {mostWorkedProject.hours} hours
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardPageComponent;
