import React from 'react';

type Props = {};

const AboutPage = (props: Props) => {
    return (
        <>
            <div className="aboutPage min-h-screen p-8 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black bg-gradient-to-br from-indigo-300 via-blue-100 to-white">
                {/* Main Heading */}
                <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, serif' }}>
                    About Code-Leveling:
                </h1>

                {/* Bullet Points */}
                <ul className="space-y-8 list-none pl-6 dark:text-gray-300 text-gray-900">
                    {/* Point 1 */}
                    <li className="text-xl pl-4 border-l-4 border-purple-500" style={{ fontFamily: 'Montserrat, serif' }}>
                        <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Hi, this is me (Armaan), the developer of Code-Leveling.
                        </span>
                    </li>

                    {/* Point 2 */}
                    <li className="text-lg pl-8 border-l-4 border-pink-500">
                        This is a rip-off of the system from <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Solo Leveling</span>, but for coders. I hope you enjoy this!
                    </li>

                    {/* Point 3 */}
                    <li className="text-lg pl-12 border-l-4 border-indigo-500">
                        <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            My main goal
                        </span> was to improve the motivation that people have for coding. Using this platform, they would be more motivated to level up their skills.
                    </li>

                    {/* Point 4 */}
                    <li className="text-lg pl-16 border-l-4 border-blue-500">
                        <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            People can:
                        </span>
                        <ul className="list-disc pl-8 mt-2 space-y-2">
                            <li>
                                Buy stuff using <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">DevBits</span> (the currency here).
                            </li>
                            <li>
                                Get shoutouts, be at the top of the leaderboard, or customize their profile (public or private).
                            </li>
                            <li>
                                Manage their profile settings, including privacy options.
                            </li>
                            <li>
                                Get streak freezes and other cool features to keep their progress going.
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* Feedback Form */}
                <div className="mt-16 p-8 dark:bg-gray-800 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, serif' }}>
                        Feedback Form
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Armaan wants to know your thoughts! Share your feedback, suggestions, or just say hi. 😊
                    </p>
                    <form className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-500">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full px-4 py-2 dark:bg-gray-700 border-[1px] border-gray-600 outline-none rounded-md dark:text-white text-black focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                                Email (optional)
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-2 dark:bg-gray-700 border-[1px] border-gray-600 outline-none rounded-md dark:text-white text-black focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter your email (if you'd like a response)"
                            />
                        </div>

                        {/* Feedback Field */}
                        <div>
                            <label htmlFor="feedback" className="block text-sm font-medium text-gray-500">
                                Feedback <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                rows={4}
                                required
                                className="mt-1 block w-full px-4 py-2 dark:bg-gray-700 border-[1px] border-gray-600 outline-none rounded-md dark:text-white text-black focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Share your feedback, suggestions, or just say hi!"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-700 transition-all"
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
