import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const ProfilePage = () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [userData, setUserData] = useState<any>({
        realName: "John Doe",
        developerName: "coder123",
        email: "johndoe@example.com",
        devBits: 1500,
        totalCodingTime: "1,200 hours",
        mostUsedLanguage: "JavaScript",
        bestProject: "CodeLevel Platform",
        bio: "Passionate coder | Open-source enthusiast | Building cool stuff 🚀",
        codingStreak: "42 days",
        currentLevel: "Advanced",
        favoriteLanguage: "JavaScript",
    });
    const [isEditing, setIsEditing] = useState(false);

    const toggleProfileVisibility = () => setIsPrivate(!isPrivate);
    const handleInputChange = (field: any, value: any) => {
        setUserData((prev: any) => ({ ...prev, [field]: value }));
    };
    const saveChanges = () => setIsEditing(false);

    // Three.js Effect
    const threeContainerRef = useRef<HTMLDivElement>(null);



    // Dropdown options for Best Project
    const bestProjectOptions = [
        "CodeLevel Platform",
        "AI Chatbot",
        "E-commerce Website",
        "Game Engine",
        "Mobile App",
    ];

    return (
        <div className="profilePage min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8 relative z-10">
            {/* Three.js Container */}
            <div
                ref={threeContainerRef}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: -1 }}
            ></div>

            {/* Profile Card */}
            <div
                className="relative w-[900px] h-[450px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 shadow-lg"
                style={{
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-20 rounded-3xl"></div>

                <div className="relative flex h-full">
                    {/* Left Section */}
                    <div className="w-1/3 flex flex-col items-center justify-center p-6 border-r border-gray-700">
                        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden border-4 border-blue-400">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {isEditing ? (
                            <input
                                type="text"
                                value={userData.realName}
                                onChange={(e) =>
                                    handleInputChange("realName", e.target.value)
                                }
                                className="mt-4 w-3/4 bg-gray-700 text-white text-center p-2 rounded-md"
                            />
                        ) : (
                            <h1 className="text-2xl font-bold text-white mt-4">
                                {userData.realName}
                            </h1>
                        )}
                        {isEditing ? (
                            <input
                                type="text"
                                value={`@${userData.developerName}`}
                                onChange={(e) =>
                                    handleInputChange("developerName", e.target.value.replace(/^@/, ""))
                                }
                                className="mt-2 w-3/4 bg-gray-700 text-white text-center p-2 rounded-md"
                            />
                        ) : (
                            <p className="text-blue-400 text-sm">@{userData.developerName}</p>
                        )}
                    </div>

                    {/* Right Section */}
                    <div className="w-2/3 flex flex-col justify-between p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Non-editable fields */}
                            {[
                                ["DevBits", "devBits"],
                                ["Total Coding Time", "totalCodingTime"],
                                ["Email", "email"],
                                ["Coding Streak", "codingStreak"],
                                ["Current Level", "currentLevel"],
                            ].map(([label, key]) => (
                                <div key={key}>
                                    <label className="text-sm text-gray-400">{label}</label>
                                    <p className="text-white">{userData[key]}</p>
                                </div>
                            ))}

                            {/* Editable fields */}
                            {[
                                ["Most Used Language", "mostUsedLanguage"],
                                ["Favorite Language", "favoriteLanguage"],
                            ].map(([label, key]) => (
                                <div key={key}>
                                    <label className="text-sm text-gray-400">{label}</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={userData[key]}
                                            onChange={(e) => handleInputChange(key, e.target.value)}
                                            className="w-full bg-gray-700 text-white p-2 rounded-md"
                                        />
                                    ) : (
                                        <p className="text-white">{userData[key]}</p>
                                    )}
                                </div>
                            ))}

                            {/* Best Project Dropdown */}
                            <div>
                                <label className="text-sm text-gray-400">Best Project</label>
                                {isEditing ? (
                                    <select
                                        value={userData.bestProject}
                                        onChange={(e) => handleInputChange("bestProject", e.target.value)}
                                        className="w-full bg-gray-700 text-white p-2 rounded-md"
                                    >
                                        {bestProjectOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <p className="text-white">{userData.bestProject}</p>
                                )}
                            </div>
                        </div>

                        {/* Public/Private Toggle */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">
                                {isPrivate ? "Private" : "Public"}
                            </span>
                            <button
                                onClick={toggleProfileVisibility}
                                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${isPrivate ? "bg-red-600" : "bg-blue-600"
                                    }`}
                            >
                                <div
                                    className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ${isPrivate ? "translate-x-6" : "translate-x-0"
                                        }`}
                                ></div>
                            </button>
                        </div>

                        {/* Edit/Save Button */}
                        <button
                            onClick={isEditing ? saveChanges : () => setIsEditing(true)}
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            {isEditing ? "Save Changes" : "Edit Profile"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
