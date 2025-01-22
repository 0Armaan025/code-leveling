"use client";
import React from 'react';
import './hero-section.css';
import ScribbleText from '../scribble-text/ScribbleText';
import ElixirOfLife from '../elixir/elixir_of_life';
import XCard from '../x-card/XCard';
import Image from 'next/image';
import ThemeToggleBtn from '../theme-toggle/ThemeToggleBtn';
import CodeLevelingLogo from '../code-leveling-logo/CodeLevelingLogo';
import FeatureCard from '../feature-card/FeatureCard';
import MacBookComponent from '../macbook/Macbook';

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <>
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
            <div className="flex flex-col mb-8 sm:flex-row justify-start ml-8 items-center sm:space-x-4 space-y-8 sm:space-y-0">
                <FeatureCard logoUrl="https://cdn-icons-png.flaticon.com/128/1067/1067357.png" featureContent='Get a great boost in your coding journey! ' featureTitle='Coding boost!' />
                <FeatureCard logoUrl="https://cdn-icons-png.flaticon.com/128/12663/12663290.png" featureContent='Analyse the time spent on projects and tech-stacks you use!' featureTitle='Project insights!' />
                <FeatureCard logoUrl="https://cdn-icons-png.flaticon.com/128/2817/2817958.png" featureContent='Level up and be on the leaderboard!' featureTitle='Ranking system!' />
                <FeatureCard logoUrl="https://cdn-icons-png.flaticon.com/128/11918/11918414.png" featureContent='Modify your profile interactively by leveling up! :D and getting stuff from shop.' featureTitle='Interactive profile!' />
            </div>

            <div className="flex flex-col justify-center items-center mt-16 mb-8">
                <h3 className='text-[#68686d] text-lg font-medium' style={{ fontFamily: "Montserrat, serif" }}>Supported by</h3>
                <br />
                <div className="flex flex-row justify-center items-center">


                    {/* supported by kinda thingy container kinda */}

                    <div className='items-center justify-center text-white rounded-lg bg-[#18181b] hover:bg-opacity-70 transition-all cursor-pointer px-4 py-2 border-[0.5px] border-gray-700 ' style={{ fontFamily: "Montserrat, serif" }}>
                        No one :(
                    </div>
                    <div className='iSupportYa items-center ml-4 justify-center flex flex-row text-white rounded-lg bg-[#18181b] hover:bg-opacity-70 transition-all cursor-pointer px-4 py-2 border-[0.5px] border-gray-700 '>
                        <h3 style={{ fontFamily: "Montserrat, serif" }} className='text-purple-500'>I will 	&lt;3</h3>
                        <Image src="https://cdn-icons-png.flaticon.com/128/508/508786.png" className='.heartImage ml-2' alt="heart icon" height={20} width={20} />
                    </div>

                </div>
                
            </div>

        </>
    );
}

export default HeroSection;
