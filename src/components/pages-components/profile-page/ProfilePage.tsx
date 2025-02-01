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
        currentLevel: "30",
        favoriteLanguage: "JavaScript",
        xp: "300",
    });
    const [isEditing, setIsEditing] = useState(false);

    const toggleProfileVisibility = () => setIsPrivate(!isPrivate);
    const handleInputChange = (field: any, value: any) => {
        setUserData((prev: any) => ({ ...prev, [field]: value }));
    };
    const saveChanges = () => setIsEditing(false);

    // Three.js Effect
    const threeContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!threeContainerRef.current) return;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        threeContainerRef.current.appendChild(renderer.domElement);

        // Cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({
            color: 0x3b82f6,
            wireframe: true,
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            if (threeContainerRef.current) {
                threeContainerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    // Dropdown options for Best Project
    const bestProjectOptions = [
        "CodeLevel Platform",
        "AI Chatbot",
        "E-commerce Website",
        "Game Engine",
        "Mobile App",
    ];

    return (
        <div className="profilePage min-h-screen p-6 bg-black flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

            {/* Three.js Container */}
            <div
                ref={threeContainerRef}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: -1 }}
            ></div>

            {/* Profile Card */}
            <div className="relative w-full max-w-[900px] bg-black/90 rounded-xl border-2 border-blue-500/30 shadow-xl p-6 backdrop-blur-xl">
                {/* Holographic Effects */}
                <div className="absolute inset-0 rounded-xl border-2 border-blue-500/20 animate-border-pulse"></div>
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

                <div className="relative flex flex-col md:flex-row h-full">
                    {/* Left Section */}
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-4 border-b md:border-b-0 md:border-r border-blue-500/30">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center overflow-hidden border-4 border-cyan-500/50 shadow-xl">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        {isEditing ? (
                            <input
                                type="text"
                                value={userData.realName}
                                onChange={(e) =>
                                    handleInputChange("realName", e.target.value)
                                }
                                className="mt-4 w-3/4 bg-black/50 text-cyan-300 text-center p-2 rounded-md border border-cyan-500/30 focus:outline-none font-mono"
                            />
                        ) : (
                            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mt-4">
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
                                className="mt-2 w-3/4 bg-black/50 text-cyan-300 text-center p-2 rounded-md border border-cyan-500/30 focus:outline-none font-mono"
                            />
                        ) : (
                            <p className="text-cyan-400 text-sm font-mono mt-2">
                                @{userData.developerName}
                            </p>
                        )}
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-2/3 flex flex-col justify-between p-4 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Non-editable fields */}
                            {[
                                ["DevBits", "devBits"],
                                ["Total Coding Time", "totalCodingTime"],
                                ["Email", "email"],
                                ["Coding Streak", "codingStreak"],
                                ["Current Level", "currentLevel"],
                                ["XP", "xp"]
                            ].map(([label, key]) => (
                                <div key={key}>
                                    <label className="text-sm text-cyan-400/80 font-mono">{label}</label>
                                    <p className="text-cyan-300 font-mono">{userData[key]}</p>
                                </div>
                            ))}

                            {/* Editable fields */}
                            {[
                                ["Most Used Language", "mostUsedLanguage"],
                                ["Favorite Language", "favoriteLanguage"],
                            ].map(([label, key]) => (
                                <div key={key}>
                                    <label className="text-sm text-cyan-400/80 font-mono">{label}</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={userData[key]}
                                            onChange={(e) => handleInputChange(key, e.target.value)}
                                            className="w-full bg-black/50 text-cyan-300 p-2 rounded-md border border-cyan-500/30 focus:outline-none font-mono"
                                        />
                                    ) : (
                                        <p className="text-cyan-300 font-mono">{userData[key]}</p>
                                    )}
                                </div>
                            ))}

                            {/* Best Project Dropdown */}
                            <div>
                                <label className="text-sm text-cyan-400/80 font-mono">Best Project</label>
                                {isEditing ? (
                                    <select
                                        value={userData.bestProject}
                                        onChange={(e) => handleInputChange("bestProject", e.target.value)}
                                        className="w-full bg-black/50 text-cyan-300 p-2 rounded-md border border-cyan-500/30 focus:outline-none font-mono"
                                    >
                                        {bestProjectOptions.map((option) => (
                                            <option key={option} value={option} className="bg-black">
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <p className="text-cyan-300 font-mono">{userData.bestProject}</p>
                                )}
                            </div>
                        </div>

                        {/* Public/Private Toggle */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-cyan-400/80 font-mono">
                                {isPrivate ? "Private" : "Public"}
                            </span>
                            <button
                                onClick={toggleProfileVisibility}
                                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${isPrivate ? "bg-red-600" : "bg-cyan-600"
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
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-md font-mono hover:scale-105 hover:shadow-[0_0_10px_1px_rgba(34,211,238,0.3)] transition-all duration-300"
                        >
                            {isEditing ? "Save Changes" : "Edit Profile"}
                        </button>
                    </div>
                </div>

                {/* System Footer */}
                <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <div className="flex justify-between items-center text-sm text-cyan-500/50 font-mono">
                        <div className="flex items-center gap-2">
                            <span className="animate-pulse">◈</span>
                            PROFILE STATUS: {isPrivate ? "PRIVATE" : "PUBLIC"}
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

export default ProfilePage;
