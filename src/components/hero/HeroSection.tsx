"use client";
import React from 'react';
import './hero-section.css';
import ScribbleText from '../scribble-text/ScribbleText';
import ElixirOfLife from '../elixir/elixir_of_life';
import XCard from '../x-card/XCard';
import ThemeToggleBtn from '../theme-toggle/ThemeToggleBtn';
import CodeLevelingLogo from '../code-leveling-logo/CodeLevelingLogo';

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className="heroSection flex flex-col md:flex-row justify-start items-start md:items-start">
            {/* Left Section */}
            <div className="flex flex-col p-4 mt-16 justify-start ml-9 items-start md:items-start">
                <h3
                    className="text-4xl md:text-6xl text-white font-semibold md:w-[40rem] leading-snug md:leading-[4rem]"
                    style={{ fontFamily: "Montserrat, serif" }}
                >
                    Get <span className="text-[#DF98FB]">
                        <ScribbleText>coding boost</ScribbleText>
                    </span> to turn yourself into a coding machine!
                </h3>

                {/* Spacing */}
                <div className="h-4 md:h-8"></div>

                <h4
                    className="text-lg md:text-xl text-[#a1a1aa] w-full md:w-[40rem]"
                    style={{ fontFamily: "Hind Madurai" }}
                >
                    You get to level-up like never before! Motivation and dopamine at its peaks.
                </h4>

                {/* Spacing */}
                <div className="h-4 md:h-8"></div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0">
                    <input
                        type="button"
                        value="Get VS Code extension"
                        className="px-5 py-2 w-60 bg-[#0064d7] text-white hover:bg-[#025cc4] transition-all cursor-pointer rounded-3xl text-lg font-medium"
                        style={{ fontFamily: 'Montserrat, serif' }}
                    />
                    <input
                        type="button"
                        value="See documentation..."
                        className="mt-4 w-60 md:mt-0 md:ml-4 px-5 py-2 bg-white bg-opacity-10 text-white hover:bg-opacity-15 transition-all cursor-pointer rounded-3xl text-lg font-medium"
                        style={{ fontFamily: 'Montserrat, serif' }}
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex flex-col ml-8 justify-center items-center relative">
                <div className="elixirDiv right-20 mt-8">
                    <XCard />
                    <ElixirOfLife />
                </div>
                <ThemeToggleBtn />
                <CodeLevelingLogo />
            </div>
        </div>
    );
}

export default HeroSection;
