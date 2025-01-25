"use client";
import HeroSection from '@/components/hero/HeroSection';
import Navbar from '@/components/navbar/Navbar';
import React from 'react'
import './homepage.css';

type Props = {}

const HomePage = (props: Props) => {
    return (
        <>
            <div className="homePage bg-gradient-to-br from-gray-900 to-black">
                <HeroSection />
            </div>
        </>
    );
}

export default HomePage
