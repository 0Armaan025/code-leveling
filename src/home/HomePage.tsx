"use client";
import HeroSection from '@/components/hero/HeroSection';
import Navbar from '@/components/navbar/Navbar';
import React from 'react'
import './homepage.css';

type Props = {}

const HomePage = (props: Props) => {
    return (
        <>
            <div className="homePage dark:bg-gradient-to-br dark:from-gray-900 dark:to-black bg-gradient-to-br from-indigo-300 via-blue-100 to-white">
                <HeroSection />
            </div>
        </>
    );
}

export default HomePage
