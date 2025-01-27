"use client";
import './docs-page.css';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

type Props = {};

const DocsPage = (props: Props) => {
    // State to manage the collapse/show functionality
    const [isCollapsed, setIsCollapsed] = useState(false);

    // State to manage the currently active feature
    const [activeFeature, setActiveFeature] = useState('Introduction');

    // Refs for each feature's content section
    const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // List of features
    const features = [
        'Introduction',
        'How to level up?',
        'Shop - how to redeem',
        'Shoutouts',
        'Leaderboard',
        'FAQs',
        'Contact',
    ];

    // Function to toggle the collapse/show state
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Function to handle feature click
    const handleFeatureClick = (feature: string) => {
        setActiveFeature(feature);
        // Scroll to the selected feature's content
        featureRefs.current[feature]?.scrollIntoView({ behavior: 'smooth' });
    };

    // Effect to observe the visibility of feature sections
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Update the active feature when the section is in view
                        setActiveFeature(entry.target.id);
                    }
                });
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.5, // Trigger when 50% of the section is visible
            }
        );

        // Observe each feature's content section
        features.forEach((feature) => {
            const element = featureRefs.current[feature];
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup observer on unmount
        return () => {
            features.forEach((feature) => {
                const element = featureRefs.current[feature];
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [features]);

    return (
        <>
            <div className="docsPage flex flex-col md:flex-row justify-start items-start bg-gradient-to-br from-gray-900 to-black min-h-screen">
                {/* Sidebar Section */}
                <div className={`flex flex-col justify-start items-start overflow-x-hidden md:ml-8 mt-0 md:h-[170vh] p-2 md:pr-12 border-r-[0.5px] border-r-gray-700 ${isCollapsed ? 'w-16' : 'w-full md:w-60'}`}>
                    <div className="flex flex-row justify-start items-center mt-8 cursor-pointer w-48" onClick={toggleCollapse}>
                        <h2 className="font-medium" style={{ fontFamily: 'Montserrat, serif' }}>
                            Getting Started
                        </h2>
                        <Image
                            src="https://i.ibb.co/2k8zSwc/arrow-down-sign-to-navigate.png"
                            alt="down arrow alt"
                            height={16}
                            width={16}
                            className={`ml-4 transition-transform duration-200 ${isCollapsed ? 'transform rotate-180' : ''}`}
                        />
                    </div>

                    {/* Collapsible Feature List */}
                    {!isCollapsed && (
                        <ul className="mt-4 pl-6 list-disc space-y-2">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className={`ml-4 p-2 rounded transition-all duration-200 cursor-pointer ${activeFeature === feature
                                        ? 'text-white font-semibold'
                                        : 'hover:text-gray-400 text-gray-600'
                                        }`}
                                    onClick={() => handleFeatureClick(feature)}
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col justify-start items-start md:ml-8 mt-8 w-full p-4 md:p-0">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome to Code Leveling</h1>
                    <p className="text-gray-600">
                        Your ultimate guide to mastering code and leveling up your skills.
                    </p>

                    {/* Dynamic Content Based on Active Feature */}
                    <div className="mt-8 w-full">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                id={feature}
                                ref={(el) => (featureRefs.current[feature] = el)}
                                className="mb-12"
                            >
                                {feature === 'Introduction' && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold mb-4">Introduction</h2>
                                        <p className="text-gray-700">
                                            Code Leveling is a platform designed to help developers of all skill levels improve their coding abilities. Whether you're a beginner or an experienced programmer, our tools and resources will help you level up your skills.
                                        </p>

                                    </div>
                                )}

                                {feature === 'How to level up?' && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold mb-4">How to Level Up?</h2>
                                        <p className="text-gray-700">
                                            To level up, complete coding challenges, participate in community events, and earn points. As you progress, you'll unlock new features and rewards.
                                        </p>
                                    </div>
                                )}

                                {feature === 'Shop - how to redeem' && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold mb-4">Shop - How to Redeem</h2>
                                        <p className="text-gray-700">
                                            Use your earned points to redeem exclusive items in the shop. Visit the shop section to browse available rewards and follow the instructions to redeem them.
                                        </p>
                                    </div>
                                )}

                                {feature === 'Shoutouts' && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold mb-4">Shoutouts</h2>
                                        <p className="text-gray-700">
                                            Recognize and celebrate the achievements of fellow developers. Give shoutouts to those who have helped you or inspired you in your coding journey.
                                        </p>
                                    </div>
                                )}

                                {feature === 'Leaderboard' && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold mb-4">Leaderboard</h2>
                                        <p className="text-gray-700">
                                            Compete with other developers and climb the leaderboard. Track your progress and see how you rank among your peers.
                                        </p>
                                    </div>
                                )}

                                {feature === 'FAQs' && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold mb-4">FAQs</h2>
                                        <p className="text-gray-700">
                                            Find answers to frequently asked questions about Code Leveling, including how to get started, how to earn points, and more.
                                        </p>
                                    </div>
                                )}

                                {feature === 'Contact' && (
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact</h2>
                                        <p className="text-gray-700">
                                            Need help? Reach out to our support team at{' '}
                                            <a href="mailto:support@codeleveling.com" className="text-blue-600">
                                                support@codeleveling.com
                                            </a>
                                            .
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DocsPage;
