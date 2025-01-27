import React, { useState } from "react";

const ShopPageComponent = () => {
    const shopItems = [
        {
            id: 1,
            title: "Health Potion",
            image: "https://via.placeholder.com/150",
            description: "Restores 50 HP instantly.",
            price: 100,
            type: "Potion"
        },
        {
            id: 2,
            title: "Mana Potion",
            image: "https://via.placeholder.com/150",
            description: "Restores 50 MP instantly.",
            price: 120,
            type: "Potion"
        },
        {
            id: 3,
            title: "Profile Change Credit",
            image: "https://via.placeholder.com/150",
            description: "Change your profile look with this credit.",
            price: 200,
            type: "Credit"
        },
        {
            id: 4,
            title: "Coding Day Streak Booster",
            image: "https://via.placeholder.com/150",
            description: "Extend your coding streak by 1 day!",
            price: 300,
            type: "Booster"
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currency, setCurrency] = useState(1000);

    const categories = ["All", "Potion", "Booster", "Credit"];

    const filteredItems = selectedCategory === "All"
        ? shopItems
        : shopItems.filter(item => item.type === selectedCategory);

    const handleAddToCart = (item: any) => {
        if (currency >= item.price) {
            setCurrency(currency - item.price);
            alert(`[SYSTEM] ${item.title} added to inventory!`);
        } else {
            alert("[WARNING] Insufficient DevBits!");
        }
    };

    return (
        <div className="shopPage min-h-screen p-4 bg-black flex items-start justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

            {/* Main Container - Reduced width and padding */}
            <div className="relative w-full max-w-[1000px] bg-black/90 rounded-xl border-2 border-blue-500/30 shadow-xl p-6 backdrop-blur-xl">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                            SYSTEM SHOP
                        </h1>
                        <p className="text-xs text-cyan-400/80 font-mono">Item Acquisition Interface</p>
                    </div>
                    <div className="bg-black/80 p-2 rounded-lg border border-cyan-500/30">
                        <span className="font-mono text-cyan-400">
                            DevBits: <span className="text-xl font-bold text-cyan-300">{currency}</span>
                        </span>
                    </div>
                </div>

                {/* Filter Section - Fixed dropdown */}
                <div className="mb-4 space-y-2">
                    <label className="text-cyan-400/80 text-xs font-mono">ITEM CATEGORY FILTER</label>
                    <div className="relative bg-gradient-to-r from-black/80 to-black/60 p-[1px] rounded-lg border border-blue-500/30">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-3 py-1.5 bg-black/80 rounded-lg text-cyan-300 focus:outline-none font-mono text-sm appearance-none z-10"
                        >
                            {categories.map(category => (
                                <option key={category} value={category} className="bg-black">
                                    {category.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Items Grid - Reduced gap and padding */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredItems.map(item => (
                        <div
                            key={item.id}
                            className="group bg-black/80 p-3 rounded-lg border-2 border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer relative"
                        >
                            {/* Item Content */}
                            <div className="relative space-y-2">
                                {/* Item Image */}
                                <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-black to-gray-900 p-1 border border-cyan-500/30">
                                    <div className="w-full h-full rounded-[calc(0.5rem-4px)] overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                                    </div>
                                </div>

                                {/* Item Info */}
                                <div className="space-y-1.5">
                                    <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-mono">
                                        {item.title.toUpperCase()}
                                    </h2>
                                    <p className="text-cyan-400/80 text-xs font-mono">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Price & Buy Button */}
                                <div className="flex justify-between items-center">
                                    <div className="bg-black/50 px-2 py-0.5 rounded-full border border-cyan-500/30">
                                        <span className="text-cyan-300 font-mono text-xs">
                                            {item.price} DevBits
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md font-mono text-white/90 hover:text-white transition-all
                                        hover:scale-105 hover:shadow-[0_0_10px_1px_rgba(34,211,238,0.3)] text-sm"
                                    >
                                        ACQUIRE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* System Footer - Smaller text */}
                <div className="mt-6 pt-4 border-t border-cyan-500/20">
                    <div className="flex justify-between items-center text-xs text-cyan-500/50 font-mono">
                        <div className="flex items-center gap-2">
                            <span className="animate-pulse">◈</span>
                            ACTIVE INVENTORY: {shopItems.length} ITEMS
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

export default ShopPageComponent;
