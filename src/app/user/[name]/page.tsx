"use client";
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { usePathname } from "next/navigation";

const UserPage = () => {
    const name = usePathname(); // Get the dynamic [name] parameter from the URL

    const [userData, setUserData] = useState<any>({
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

    // Three.js Effect
    const threeContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!threeContainerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            threeContainerRef.current.clientWidth / threeContainerRef.current.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(
            threeContainerRef.current.clientWidth,
            threeContainerRef.current.clientHeight
        );
        threeContainerRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        camera.position.z = 5;

        // Add mouse tracking for 3D rotation
        const onMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            const xRotation = ((clientY / innerHeight) - 0.5) * Math.PI;
            const yRotation = ((clientX / innerWidth) - 0.5) * Math.PI;

            torus.rotation.x = xRotation;
            torus.rotation.y = yRotation;
        };

        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            threeContainerRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="userPage min-h-screen cursor-pointer transition-all hover:scale-105 bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-start pt-16 relative z-10 ">
            {/* Three.js Container */}
            <div
                ref={threeContainerRef}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: -1 }}
            ></div>

            {/* User Card */}
            <div
                className="relative mb-40 w-[90%] max-w-3xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 shadow-lg flex flex-col items-center space-y-6 p-8"
                style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6)" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-transparent opacity-20 rounded-3xl"></div>

                {/* Profile Section */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden border-4 border-blue-400">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-3xl font-extrabold text-white">@{userData.developerName}</h1>
                    <p className="text-blue-400 text-center max-w-md">{userData.bio}</p>
                </div>

                {/* User Details Section */}
                <div className="grid grid-cols-2 gap-6 w-full text-white">
                    {[
                        ["DevBits", "devBits"],
                        ["Total Coding Time", "totalCodingTime"],
                        ["Email", "email"],
                        ["Coding Streak", "codingStreak"],
                        ["Current Level", "currentLevel"],
                        ["Most Used Language", "mostUsedLanguage"],
                        ["Favorite Language", "favoriteLanguage"],
                        ["Best Project", "bestProject"],
                    ].map(([label, key]) => (
                        <div key={key}>
                            <label className="text-sm text-gray-400 block">{label}</label>
                            <p className="text-lg font-semibold">{userData[key]}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}

        </div>
    );
};

export default UserPage;
