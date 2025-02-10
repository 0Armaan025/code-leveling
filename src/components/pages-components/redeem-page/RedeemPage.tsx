import React, { useState } from "react";
import "./redeem-page.css";

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
        <div className="redeemPage min-h-screen p-6 dark:bg-black bg-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 animate-pulse"></div>
            

            {/* Main Card */}
            <div className="relative w-[700px] dark:bg-black rounded-2xl border-2 border-gray-800 shadow-2xl p-8 backdrop-blur-xl transform perspective-1000">
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/20 animate-border-pulse"></div>

                {/* Glowing Center Line */}
                <div className="absolute inset-x-0 top-[120px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-bold  text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-500 dark:animate-text-shimmer">
                        SYSTEM REDEEM
                    </h1>
                    <p className="text-sm dark:text-cyan-400/80 text-gray-700 font-mono">Authorization Level: [★★★☆☆]</p>
                </div>

                {/* Input Fields */}
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <div className="group">
                        <label className="block dark:text-cyan-400/80 text-black text-sm font-mono mb-2 ml-1">
                            REDEEM CODE
                        </label>
                        <div className="relative bg-gradient-to-r from-black/80 to-black/60 p-[2px] rounded-lg hover:from-blue-gray-800 hover:to-gray-800/30 transition-all">
                            <input
                                type="text"
                                placeholder="Enter Authorization Code"
                                value={redeemCode}
                                onChange={(e) => setRedeemCode(e.target.value)}
                                className="w-full px-5 py-3 dark:bg-black/80 rounded-[calc(0.5rem-2px)] dark:text-cyan-300 text-gray-800 dark:border border-gray-800 focus:border-gray-600 outline-none focus:ring-2 focus:ring-cyan-500/20 font-mono transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label className="block dark:text-cyan-400/80 text-black text-sm font-mono mb-2 ml-1">
                            DEVELOPER ID
                        </label>
                        <div className="relative bg-gradient-to-r from-black/80 to-black/60 p-[2px] rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all">
                            <input
                                type="text"
                                placeholder="ARMAAN"
                                value={developerName}
                                onChange={(e) => setDeveloperName(e.target.value)}
                                className="w-full px-5 py-3 dark:bg-black/80 rounded-[calc(0.5rem-2px)] dark:text-cyan-300 text-gray-800 dark:border border-gray-800 focus:border-gray-600 outline-none focus:ring-2 focus:ring-cyan-500/20 font-mono transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>
                </div>

                {/* Redeem Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleRedeem}
                        className="px-6 py-2 sm:px-8 sm:py-3 dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-600 bg-black text-white rounded-lg font-bold text-white/90 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_2px_rgba(34,211,238,0.3)]"
                    >
                        INITIATE REDEEM
                    </button>
                </div>

                {/* Message Display */}
                {message && (
                    <div className={`mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg border ${message.includes("successful")
                        ? "border-green-500/30 bg-green-900/10 text-green-400"
                        : "border-red-500/30 bg-red-900/10 text-red-400"
                        } text-center font-mono animate-fade-in`}
                    >
                        {message}
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
