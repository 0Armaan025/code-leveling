import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// Dynamic imports
const ThemeToggleBtn = dynamic(() => import('../theme-toggle/ThemeToggleBtn'), { ssr: false });
const ScribbleText = dynamic(() => import('../scribble-text/ScribbleText'), { ssr: false });
const XCard = dynamic(() => import('../x-card/XCard'), { ssr: false });
const ElixirOfLife = dynamic(() => import('../elixir/elixir_of_life'), { ssr: false });

// Component imports
import CodeLevelingLogo from '../code-leveling-logo/CodeLevelingLogo';
import FeatureCard from '../feature-card/FeatureCard';
import Community from '../community/Community';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {/* Hero Section Container */}
            <div className="min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:to-black bg-gradient-to-br from-blue-600 to-purple-700 ">
                {/* Hero Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        {/* Left Section */}
                        <div className="w-full md:w-1/2 space-y-8">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                                Get <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
                                    <ScribbleText>coding boost</ScribbleText>
                                </span> to turn yourself into a coding machine!
                            </h3>

                            <p className="text-lg sm:text-xl text-gray-200 max-w-md leading-relaxed">
                                Level up like never before! Motivation and dopamine at their peak.
                            </p>

                            {/* Buttons */}
                            <div className="space-y-4">
                                <button className="px-6 py-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl text-lg font-medium text-white shadow-md hover:shadow-lg">
                                    Get VS Code extension
                                </button>

                                <Link href="/docs">
                                    <button className="px-6 py-3 ml-4 w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-xl text-lg font-medium text-white border border-white/20 shadow-md hover:shadow-lg">
                                        See documentation...
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Section with masonry-like effect */}
                        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8 hidden md:grid">
                            {/* Adding masonry-like effect */}
                            <XCard />
                            <ElixirOfLife />
                            <ThemeToggleBtn />
                            <CodeLevelingLogo />
                        </div>
                    </div>
                </div>

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

                        <label className="mt-6 text-xl font-medium text-white text-center block">
                            Demo of Code-Leveling ⬆️
                        </label>
                    </div>
                </section>

                {/* Community Section */}
                <section className="mt-20 ">
                    <div className="container mx-auto px-4 py-12">
                        <Community />
                    </div>
                </section>
            </div>
        </>
    );
};

export default HeroSection;
