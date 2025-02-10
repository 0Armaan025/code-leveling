"use client";
import './docs-page.css';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

type Props = {};

const DocsPage = (props: Props) => {
    // State to manage the collapse/show functionality
    const [isCollapsed, setIsCollapsed] = useState(false);

    // State to manage the currently active feature
    const [activeFeature, setActiveFeature] = useState("Introduction");

    // Fix: Initialize ref properly
    const featureRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // List of features
    const features = [
        {
            title: "Introduction",
            content: (
                <>
                    Code Leveling is a platform designed to help developers of all skill levels improve their coding abilities. Whether you're a beginner or an experienced programmer, leveling up can be challenging, but with Code Leveling, you'll always have the motivation to push yourself further. As Bruce Lee once said, "I fear not the man who has practiced 1,000 kicks, but I fear the man who has practiced one kick 1,000 times." Both approaches—being a Jack of all trades and mastering one skill—work, depending on how you approach learning. The key is to never stop learning and never give up! Keep going and level up! :D
                    <br />
                    <br />
                    Want to learn more? Visit our <a href="/about" className="text-blue-600">About Us</a> page.
                </>
            )
        },
        {
            title: "How to Level Up?",
            content: (
                <>
                    To level up, make sure you regularly check your notifications! You'll need to gather experience points by completing tasks and challenges. Once you've earned enough experience, you can surpass level limits and level up. Keep completing tasks and stay on top of your notifications to track your progress.
                    <br />
                    <br />
                    Learn more about leveling up and tasks on our <a href="/tasks" className="text-blue-600">Tasks</a> page.
                </>
            )
        },
        {
            title: "Shop - How to Redeem",
            content: (
                <>
                    The platform uses DevBits, the developer's currency. After completing tasks and challenges, you earn DevBits which can be redeemed in the shop for power-ups, streak freezes, and much more. Once you’ve earned DevBits, simply visit the <a href="/shop" className="text-blue-600">Shop</a> to spend them and unlock awesome features!
                    <br />
                    <br />
                    For more information on how to use your DevBits, check out the <a href="/shop-guide" className="text-blue-600">Shop Guide</a>.
                </>
            )
        },
        {
            title: "Shoutouts",
            content: (
                <>
                    For a limited time, you can earn a shoutout! These are awarded for achievements and special reasons. The Shoutout card can be purchased in the <a href="/shop" className="text-blue-600">Shop</a>, and if you’re lucky, you might get a shoutout by a decision from Armaan. Enjoy your moment in the spotlight!
                    <br />
                    <br />
                    Interested in a shoutout? Check out the <a href="/shoutouts" className="text-blue-600">Shoutouts</a> page for more details.
                </>
            )
        },
        {
            title: "Leaderboard",
            content: (
                <>
                    Compete with other developers and climb the leaderboard! Track your progress and see how you rank among your peers. Push yourself to reach the top and claim your spot as a top-tier developer.
                    <br />
                    <br />
                    View the current leaderboard and challenge yourself by visiting the <a href="/leaderboard" className="text-blue-600">Leaderboard</a> page.
                </>
            )
        },
        {
            title: "FAQs",
            content: (
                <>
                    Find answers to commonly asked questions about Code Leveling! Whether you're just getting started or need help troubleshooting, our FAQ section has got you covered. Here are some of the most frequent questions:
                    
                        <strong>Where can I find the extension?</strong> Visit the <a href="https://marketplace.visualstudio.com/items?itemName=your-vs-code-extension" className="text-blue-600" target="_blank" rel="noopener noreferrer">VS Code Marketplace</a> to download the Code Leveling extension. <br/>
                        <strong>How do I set it up?</strong> Press <strong>Ctrl + P</strong> in VS Code, type "Code Leveling", and hit enter. Then, simply enter your API key to connect your account. <br/>
                        <strong>How can I contact support?</strong> If you need assistance, you can reach out to our support team by emailing <a href="mailto:support@codeleveling.com" className="text-blue-600">support@codeleveling.com</a><br/>
                        <strong>How do I track my progress?</strong> Your progress is tracked in real-time on your <a href="/profile" className="text-blue-600">profile page</a>. You'll be able to see how many tasks you've completed and your current level.<br/>
                    
                    For more FAQs, head over to our <a href="/faqs" className="text-blue-600">FAQs</a> page.
                </>
            )
        },
        {
            title: "Contact",
            content: (
                <>
                    Need help? Reach out to our support team via email at{" "}
                    <a href="mailto:support@codeleveling.com" className="text-blue-600">
                        support@codeleveling.com
                    </a>. Our team is here to assist you with any issues or questions you may have.
                    <br />
                    <br />
                    If you prefer, you can also contact us via our <a href="/contact" className="text-blue-600">Contact Page</a> for more ways to get in touch.
                </>
            )
        },
    ];
    
    // Function to toggle the collapse/show state
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Function to handle feature click
    function handleFeatureClick(feature: string) {

        setActiveFeature(feature);
        // Scroll to the selected feature's content
        featureRefs.current[feature]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    // Effect to observe the visibility of feature sections
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     // Update the active feature when the section is in view
    //                     setActiveFeature(entry.target.id);
    //                 }
    //             });
    //         },
    //         {
    //             root: null, // Use the viewport as the root
    //             rootMargin: '0px',
    //             threshold: 0.5, // Trigger when 50% of the section is visible
    //         }
    //     );

    //     // Observe each feature's content section
    //     features.forEach((feature) => {
    //         const element = featureRefs.current[feature.title];
    //         if (element) {
    //             observer.observe(element);
    //         }
    //     });

    //     // Cleanup observer on unmount
    //     return () => {
    //         features.forEach((feature) => {
    //             const element = featureRefs.current[feature.title];
    //             if (element) {
    //                 observer.unobserve(element);
    //             }
    //         });
    //     };
    // }, [features]);

    return (
        <>
            <div className="docsPage flex flex-col md:flex-row justify-start items-start dark:bg-black bg-gradient-to-r bg-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
                {/* Sidebar Section */}
                <div className={`flex flex-col justify-start items-start overflow-x-hidden md:ml-8 mt-0 md:h-[300vh] p-2 md:pr-12 border-r-[0.5px] border-r-gray-700 w-full md:w-60`}>
                    <div className="flex flex-row justify-start items-center mt-8 cursor-pointer w-48" onClick={toggleCollapse}>
                        <h2 className="dark:text-white text-gray-900 font-semibold" style={{ fontFamily: 'Montserrat, serif' }}>
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
                                    className={`ml-4 p-2 rounded transition-all duration-200 cursor-pointer ${activeFeature === feature.title
                                        ? 'dark:text-white text-gray-900 font-semibold'
                                        : 'dark:hover:text-gray-400 hover:text-black text-gray-600'
                                        }`}
                                    onClick={() => handleFeatureClick(feature.title)}
                                >
                                    {feature.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col justify-start items-start md:ml-8 mt-8 w-full p-4 md:p-0">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white text-gray-900">Welcome to Code Leveling</h1>
                    <p className="text-gray-500">
                        Your ultimate guide to mastering code and leveling up your skills.
                    </p>

                    {/* Dynamic Content Based on Active Feature */}
                    <div className="mt-8 w-full">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                id={feature.title}
                                ref={(el) => { featureRefs.current[feature.title] = el }}
                                className="mb-12"
                            >
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 dark:text-white text-gray-900">{feature.title}</h2>
                                    <p className="text-gray-500 text-lg">
                                        {feature.content}
                                    </p>

                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </>
    );
};

export default DocsPage;
