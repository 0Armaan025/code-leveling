import React, { useState, useEffect, useRef } from "react";
import * as THREE from 'three';

const ProfilePage = () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [userData, setUserData] = useState<any>({
        realName: "John Doe",
        developerName: "@coder123",
        devBits: "1,500",
        totalCodingTime: "1,200 hours",
        mostUsedLanguage: "JavaScript",
        bestProject: "CodeLevel Platform",
        bio: "Passionate coder | Open-source enthusiast | Building cool stuff 🚀",
        codingStreak: "42 days",
        currentLevel: "Advanced",
        favoriteLanguage: "JavaScript",
        email: "john.doe@example.com",
    });
    const [isEditing, setIsEditing] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

        const geometry = new THREE.SphereGeometry(1, 60, 60);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            renderer.dispose();
            scene.remove(sphere);
            geometry.dispose();
            material.dispose();
        };
    }, []);

    const toggleProfileVisibility = () => setIsPrivate(!isPrivate);
    const handleInputChange = (field: any, value: any) => {
        setUserData((prev: any) => ({
            ...prev,
            [field]: value
        }));
    };
    const saveChanges = () => setIsEditing(false);

    return (
        <div className="profilePage min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8">
            <div className="relative w-[800px] h-[450px] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-3xl border border-gray-700 shadow-2xl transform transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-20 rounded-3xl"></div>

                <div className="relative flex h-full">
                    <div className="w-1/3 flex flex-col items-center justify-center p-6 border-r border-gray-700">
                        <div className="w-48 h-48 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden border-4 border-blue-400">
                            <canvas ref={canvasRef} className="w-full h-full"></canvas>
                        </div>
                        <h1 className="text-2xl font-bold text-white mt-4">{userData.realName}</h1>
                        <p className="text-blue-400 text-sm">{userData.developerName}</p>
                    </div>

                    <div className="w-2/3 flex flex-col justify-between p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                ["Real Name", "realName"],
                                ["Developer Name", "developerName"],
                                ["Email", "email"],
                                ["DevBits", "devBits"],
                                ["Total Coding Time", "totalCodingTime"],
                                ["Most Used Language", "mostUsedLanguage"],
                                ["Best Project", "bestProject"],
                                ["Bio", "bio"],
                                ["Coding Streak", "codingStreak"],
                                ["Current Level", "currentLevel"],
                                ["Favorite Language", "favoriteLanguage"],
                            ].map(([label, key]) => (
                                <div key={key}>
                                    <label className="text-sm text-gray-400">{label}</label>
                                    {isEditing && !["devBits", "totalCodingTime", "codingStreak", "currentLevel", "bestProject"].includes(key) ? (
                                        <input
                                            type="text"
                                            value={userData[key]}
                                            onChange={(e) =>
                                                handleInputChange(key, e.target.value)
                                            }
                                            className="w-full bg-gray-700 text-white p-2 rounded-md"
                                        />
                                    ) : (
                                        <p className="text-white">{userData[key]}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">
                                {isPrivate ? "Private" : "Public"}
                            </span>
                            <button
                                onClick={toggleProfileVisibility}
                                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${isPrivate ? "bg-red-600" : "bg-blue-600"}`}
                            >
                                <div
                                    className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ${isPrivate ? "translate-x-6" : "translate-x-0"}`}
                                ></div>
                            </button>
                        </div>

                        <button
                            onClick={isEditing ? saveChanges : () => setIsEditing(true)}
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            {isEditing ? "Save Changes" : "Edit Profile"}
                        </button>
                    </div>
                </div>

                {/* Sparkles */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('https://svgshare.com/i/rgz.svg')",
                        backgroundSize: "150px 150px",
                        animation: "sparkles 5s linear infinite",
                    }}
                ></div>
            </div>

            <style jsx>{`
                @keyframes sparkles {
                  0% {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  50% {
                    opacity: 1;
                    transform: translateY(-10px);
                  }
                  100% {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                }
              `}</style>
        </div>
    );
};

export default ProfilePage;
