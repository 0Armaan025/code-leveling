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
        <div className="redeemPage min-h-screen p-4 sm:p-6 bg-black flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

            {/* Main Card */}
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-black rounded-2xl border-2 border-blue-500/30 shadow-2xl p-6 sm:p-8 backdrop-blur-xl transform perspective-1000">
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/20 animate-border-pulse"></div>

                {/* Glowing Center Line */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 animate-text-shimmer">
                        SYSTEM REDEEM
                    </h1>
                    <p className="text-xs sm:text-sm text-cyan-400/80 font-mono">Authorization Level: [★★★☆☆]</p>
                </div>

                {/* Input Fields */}
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <div className="group">
                        <label className="block text-cyan-400/80 text-xs sm:text-sm font-mono mb-1 sm:mb-2 ml-1">
                            REDEEM CODE
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Authorization Code"
                            value={redeemCode}
                            onChange={(e) => setRedeemCode(e.target.value)}
                            className="w-full px-4 py-2 sm:px-5 sm:py-3 bg-black/80 rounded-lg text-cyan-300 border border-blue-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 placeholder-gray-500 font-mono transition-all"
                        />
                    </div>

                    <div className="group">
                        <label className="block text-cyan-400/80 text-xs sm:text-sm font-mono mb-1 sm:mb-2 ml-1">
                            DEVELOPER ID
                        </label>
                        <input
                            type="text"
                            placeholder="ARMAAN"
                            value={developerName}
                            onChange={(e) => setDeveloperName(e.target.value)}
                            className="w-full px-4 py-2 sm:px-5 sm:py-3 bg-black/80 rounded-lg text-cyan-300 border border-blue-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 placeholder-gray-500 font-mono transition-all"
                        />
                    </div>
                </div>

                {/* Redeem Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleRedeem}
                        className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold text-white/90 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_2px_rgba(34,211,238,0.3)]"
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
                <div className="mt-6 sm:mt-10 text-center text-xs sm:text-sm text-cyan-500/50 font-mono">
                    SYSTEM STATUS: OPERATIONAL
                </div>
            </div>
        </div>
    );
};

export default RedeemPageComponent;
