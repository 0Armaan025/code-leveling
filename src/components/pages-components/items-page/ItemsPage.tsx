import React from "react";

const ItemsPageComponent = () => {
    // Mock data for items with owned quantity
    const items = [
        {
            id: 1,
            title: "Shadow Monarch's Gauntlet",
            image: "https://via.placeholder.com/150",
            description: "A powerful gauntlet that enhances strength and agility.",
            owned: 3,
        },
        {
            id: 2,
            title: "Elixir of Eternal Night",
            image: "https://via.placeholder.com/150",
            description: "Restores health and mana instantly.",
            owned: 5,
        },
        // Add other items with owned quantity
    ];

    return (
        <div className="itemsPage min-h-screen p-6 bg-black flex items-start justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

            {/* Main Container */}
            <div className="relative w-full max-w-[1000px] bg-black/90 rounded-2xl border-2 border-blue-500/30 shadow-2xl p-6 backdrop-blur-xl">
                {/* Holographic Effects */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/20 animate-border-pulse"></div>
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 animate-text-shimmer">
                            SYSTEM INVENTORY
                        </h1>
                        <p className="text-sm text-cyan-400/80 font-mono">Item Management Interface</p>
                    </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-black/80 p-3 rounded-lg border-2 border-blue-500/20 hover:border-cyan-400/50 cursor-pointer transition-all duration-300 relative"
                        >
                            {/* Hover Effect */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex flex-col items-center space-y-3 relative z-10">
                                {/* Item Image */}
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center overflow-hidden border-4 border-cyan-500/50 shadow-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                                </div>

                                {/* Item Title */}
                                <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-mono text-center">
                                    {item.title.toUpperCase()}
                                </h2>

                                {/* Item Description */}
                                <p className="text-cyan-400/80 text-xs font-mono text-center min-h-[60px]">
                                    {item.description}
                                </p>

                                {/* Owned Quantity and Use Button */}
                                <div className="w-full flex items-center justify-between mt-2">
                                    <div className="bg-black/50 px-2 py-0.5 rounded-full border border-cyan-500/30">
                                        <span className="text-cyan-300 font-mono text-xs">
                                            OWNED: {item.owned}
                                        </span>
                                    </div>
                                    <button
                                        className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md font-mono text-white/90 hover:text-white transition-all
                                        hover:scale-105 hover:shadow-[0_0_10px_1px_rgba(34,211,238,0.3)] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={item.owned === 0}
                                    >
                                        ACTIVATE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* System Footer */}
                <div className="mt-8 pt-6 border-t border-cyan-500/20">
                    <div className="flex justify-between items-center text-sm text-cyan-500/50 font-mono">
                        <div className="flex items-center gap-2">
                            <span className="animate-pulse">◈</span>
                            TOTAL ITEMS: {items.reduce((sum, item) => sum + item.owned, 0)}
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

export default ItemsPageComponent;
