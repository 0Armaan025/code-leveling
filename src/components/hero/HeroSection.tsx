"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// import Image from 'next/image';
import Link from 'next/link';
import './hero-section.css';

// Dynamic imports
const ThemeToggleBtn = dynamic(() => import('../theme-toggle/ThemeToggleBtn'), {
    ssr: false
});
const ScribbleText = dynamic(() => import('../scribble-text/ScribbleText'), {
    ssr: false
});
const XCard = dynamic(() => import('../x-card/XCard'), { ssr: false });
const ElixirOfLife = dynamic(() => import('../elixir/elixir_of_life'), {
    ssr: false
});

// Component imports
import CodeLevelingLogo from '../code-leveling-logo/CodeLevelingLogo';
import FeatureCard from '../feature-card/FeatureCard';
import Community from '../community/Community';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <React.Fragment>
            <div className={`min-h-screen bg-gradient-to-br transition-all duration-500 ${mounted ? 'dark:from-gray-900 dark:to-gray-800 from-sky-300 to-indigo-400' : 'from-blue-200 to-purple-400'}`}>
                {/* Updated Background Gradient */}
                <div className="container mx-auto px-4 py-12 relative">
                    <div className="flex flex-col md:flex-row items-start gap-12 space-x-20">
                        {/* Left Section */}
                        <div className="w-full md:w-1/2 space-y-20">
                            <div className="space-y-12 w-full">
                                <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-colors duration-300`}>
                                    Get <span className="text-blue-600"><ScribbleText>coding boost</ScribbleText></span> to turn yourself into a coding machine!
                                </h3>

                                <p className={`text-lg sm:text-xl leading-relaxed transition-all duration-300 ${mounted ? 'dark:text-gray-200 text-gray-700' : 'dark:text-gray-700 text-gray-200'}`}>
                                    Level up like never before! Motivation and dopamine at their peak.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className={`px-6 py-3 w-full sm:w-auto rounded-xl font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300 ${mounted ?
                                    'bg-blue-600 hover:bg-blue-700 text-white' :
                                    'bg-white hover:bg-gray-100 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white'}`}>
                                    Get VS Code extension
                                </button>

                                <Link href="/docs">
                                    <button className={`ml-0 sm:ml-4 px-6 py-3 w-full sm:w-auto rounded-xl font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300 ${mounted ?
                                        'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white' :
                                        'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 border border-gray-200 text-black dark:text-white'}`}>
                                        See documentation...
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Section - Only visible on desktop */}
                        {!isMobile && (
                            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-8">
                                <XCard />
                                <ElixirOfLife />
                                <div className=" flex flex-col items-center justify-center space-y-10">
                                <ThemeToggleBtn />
                                <CodeLevelingLogo />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Theme Toggle Button - Always Visible */}
                    {isMobile && (
                        <div className="fixed bottom-4 left-4 z-50">
                            <ThemeToggleBtn />
                        </div>
                    )}

                    {/* Feature Cards Section */}
                    <section className="mt-20">
                        <div className="container mx-auto px-4 py-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[{
                                    title: "Coding boost!",
                                    content: "Get a great boost in your coding journey!",
                                    iconUrl: "https://cdn-icons-png.flaticon.com/128/1067/1067357.png"
                                }, {
                                    title: "Project insights!",
                                    content: "Analyse the time spent on projects and tech stacks!",
                                    iconUrl: "https://cdn-icons-png.flaticon.com/128/12663/12663290.png"
                                }, {
                                    title: "Ranking system!",
                                    content: "Level up and be on the leaderboard!",
                                    iconUrl: "https://cdn-icons-png.flaticon.com/128/2817/2817958.png"
                                }, {
                                    title: "Interactive profile!",
                                    content: "Modify your profile interactively by leveling up and getting items from the shop.",
                                    iconUrl: "https://cdn-icons-png.flaticon.com/128/11918/11918414.png"
                                }].map((feature, index) => (
                                    <FeatureCard
                                        key={index}
                                        logoUrl={feature.iconUrl}
                                        featureContent={feature.content}
                                        featureTitle={feature.title}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Video Section */}
                    <section className="mt-20">
                        <div className="container mx-auto px-4 py-12">
                            <video
                                width="100%"
                                height="auto"
                                controls
                                autoPlay={mounted}
                                className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl"
                            >
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <label className={`mt-6 text-xl font-medium text-center block transition-colors duration-300 ${mounted ? 'dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'}`}>
                                Demo of Code-Leveling ⬆️
                            </label>
                        </div>
                    </section>

                    {/* Community Section */}
                    <section className="mt-20">
                        <div className="container mx-auto px-4 py-12">
                            <Community />
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeroSection;
