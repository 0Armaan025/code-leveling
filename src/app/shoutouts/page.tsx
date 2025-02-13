"use client";
import React, { useState } from 'react';

type Props = {};

const ShoutoutPage = (props: Props) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Message submitted:', message);
    };

    return (
        <div className="shoutoutPage min-h-screen p-8 bg-gradient-to-r from-white to-gray-100 dark:bg-black dark:from-gray-900 dark:to-gray-800">
            <center>
                <h3 className="text-3xl text-gray-900 dark:text-white font-semibold" style={{ fontFamily: 'Montserrat' }}>
                    Request a shoutout
                </h3>
                <div className="mt-4 bg-slate-300 dark:bg-[#18181b] p-6 rounded-lg shadow-lg flex flex-col justify-start items-start">
                    <form onSubmit={handleSubmit} className="w-full">
                        <textarea
                            className="w-full p-4 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="mt-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </center>
        </div>
    );
};

export default ShoutoutPage;
