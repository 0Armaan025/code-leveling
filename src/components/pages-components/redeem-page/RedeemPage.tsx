import React, { useState } from "react";
import './redeem-page.css';

const RedeemPageComponent = () => {
    const [redeemCode, setRedeemCode] = useState("");
    const [developerName, setDeveloperName] = useState("");
    const [message, setMessage] = useState("");

    const handleRedeem = () => {
        if (!redeemCode || !developerName) {
            setMessage("Please fill in both fields.");
            return;
        }

        // Mock redeem logic
        if (redeemCode === "ARMAAN123" && developerName === "ARMAAN") {
            setMessage("Redeem successful! You have received 500 DevBits.");
        } else {
            setMessage("Invalid redeem code or developer name.");
        }
    };

    return (
        <div className="redeemPage min-h-screen p-6 dark:bg-black bg-white flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

            {/* Main Card */}
            <div className="relative w-[700px] dark:bg-black rounded-2xl border-2 border-blue-500/30 shadow-2xl p-8 backdrop-blur-xl transform perspective-1000">
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/20 animate-border-pulse"></div>

                {/* Glowing Center Line */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

                {/* Header */}
                <div className="text-center mb-8 space-y-2">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 animate-text-shimmer">
                        SYSTEM REDEEM
                    </h1>
                    <p className="text-sm dark:text-cyan-400/80 text-blue-400 font-mono">Authorization Level: [★★★☆☆]</p>
                </div>

                {/* Input Fields */}
                <div className="space-y-6 mb-8">
                    {/* Redeem Code Field */}
                    <div className="group">
                        <label className="block dark:text-cyan-400/80 text-blue-600 text-sm font-mono mb-2 ml-1">
                            REDEEM CODE
                        </label>
                        <div className="relative bg-gradient-to-r from-black/80 to-black/60 p-[2px] rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all">
                            <input
                                type="text"
                                placeholder="Enter Authorization Code"
                                value={redeemCode}
                                onChange={(e) => setRedeemCode(e.target.value)}
                                className="w-full px-5 py-3 dark:bg-black/80 rounded-[calc(0.5rem-2px)] dark:text-cyan-300 text-blue-400 dark:border border-blue-500/30 focus:border-cyan-400 outline-none focus:ring-2 focus:ring-cyan-500/20 font-mono transition-all placeholder:text-blue-300"
                            />
                        </div>
                    </div>

                    {/* Developer Name Field */}
                    <div className="group">
                        <label className="block dark:text-cyan-400/80 text-blue-600 text-sm font-mono mb-2 ml-1">
                            DEVELOPER ID
                        </label>
                        <div className="relative bg-gradient-to-r from-black/80 to-black/60 p-[2px] rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all">
                            <input
                                type="text"
                                placeholder="ARMAAN"
                                value={developerName}
                                onChange={(e) => setDeveloperName(e.target.value)}
                                className="w-full px-5 py-3 dark:bg-black/80 rounded-[calc(0.5rem-2px)] dark:text-cyan-300 placeholder:text-blue-300 text-blue-400 dark:border border-cyan-400 focus:border-cyan-400 outline-none focus:ring-2 focus:ring-cyan-500/20 font-mono transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Redeem Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleRedeem}
                        className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold text-white/90 hover:text-white transition-all duration-300
                        hover:scale-105 hover:shadow-[0_0_25px_2px_rgba(34,211,238,0.3)] group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="text-shadow-blue">INITIATE REDEEM</span>
                            <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* Message Display */}
                {message && (
                    <div className={`mt-8 p-4 rounded-lg border ${
                        message.includes("successful")
                            ? "border-green-500/30 bg-green-900/10 text-green-400"
                            : "border-red-500/30 bg-red-900/10 text-red-400"
                        } text-center font-mono animate-fade-in`}
                    >
                        <div className="flex items-center justify-center gap-2">
                            {message.includes("successful") ? (
                                <svg className="w-5 h-5 animate-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                </svg>
                            )}
                            {message}
                        </div>
                    </div>
                )}

                {/* System Status Footer */}
                <div className="mt-10 text-center text-sm dark:text-cyan-500/50 text-blue-500 font-mono">
                    <div className="inline-flex items-center gap-2">
                        <span className="animate-pulse">●</span>
                        SYSTEM STATUS: OPERATIONAL
                        <span className="animate-pulse">●</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedeemPageComponent;
