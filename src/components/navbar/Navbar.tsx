import React from 'react';
import Image from 'next/image';
import LOGO_LIGHT from "../../../public/logo_light.png";
import LOGO_DARK from "../../../public/logo_dark.png";
import './navbar.css';

type Props = {}

const Navbar = (props: Props) => {
    return (
        <>
            <div className="navbar flex flex-row justify-between items-center px-4 py-2 border-b-gray-800 border-b-[0.2px] ">

                {/* logo section  */}
                <div className="flex flex-row justify-center items-center p-2 ml-1">
                    <div className="flex flex-col justify-center items-center bg-white h-8 w-8 rounded-md">

                        <Image src={LOGO_LIGHT} alt="logo" width={40} height={40} />
                    </div>
                    <h3 className="headingText text-white ml-4 font-semibold text-xl" style={{ fontFamily: "Montserrat, serif" }}>Code-leveling</h3>

                    {/* version sub section  */}
                    <div className=" px-3 py-1 ml-4 rounded-3xl cursor-pointer hover:bg-[#28282b] transition-all border-none outline-none bg-[#1d1d1f] text-[#7f7f86]">
                        <h3 className="text-xs font-semibold">Version 1.0</h3>
                    </div>

                     {/* introduction chip sub section  */}
                     <div className=" px-3 py-1 ml-4 rounded-3xl cursor-pointer hover:bg-[#1f1f22] transition-all border-[0.7px] border-gray-700 outline-none bg-[#1c1c1f] text-[#ecedee]">
                        <h3 className="text-xs font-semibold">Introducing Code-Leveling 🔥</h3>
                    </div>

                </div>

                {/* sub heading section  */}

                <div className="flex flex-row items-center">
                    <h3 className='text-[#fff] hover:text-[#b2b2b3] transition-all cursor-pointer font-medium' style={{fontFamily: "Montserrat, serif"}}>Docs</h3>
                    <div className="w-6"></div>
                    <h3 className='text-[#fff] hover:text-[#b2b2b3] transition-all cursor-pointer font-medium' style={{fontFamily: "Montserrat, serif"}}>About</h3>
                    <div className="w-6"></div>
                    <h3 className='text-[#fff] hover:text-[#b2b2b3] transition-all cursor-pointer font-medium' style={{fontFamily: "Montserrat, serif"}}>Leaderboard</h3>
                    <div className="w-4"></div>
                    <div className="w-[0.2px] h-10 bg-gray-700"></div>
                    <div className="w-4"></div>
                    <div className="px-3 py-1 flex flex-row justify-center items-center rounded-3xl border-[0.5px] cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all border-gray-700 ">
                        <Image src="https://i.ibb.co/4NjcSnQ/github.png" alt="github logo" height={20} width={20}/>
                        <h3 className="text-[#fff] ml-2 font-semibold" style={{fontFamily: "Montserrat, serif"}}>Github</h3>
                    </div>
                    <div className="w-2"></div>
                    <div className="px-3 py-1 flex flex-row justify-center items-center rounded-3xl border-[0.5px] cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all border-gray-700 ">
                        <Image src="https://i.ibb.co/NmndwN9/discord.png" alt="discord logo" height={20} width={20}/>
                        <h3 className="text-[#fff] ml-2 font-semibold" style={{fontFamily: "Montserrat, serif"}}>Discord</h3>
                    </div>
                    <div className="w-2"></div>
                    <div className="px-2  py-2 flex flex-row justify-center items-center rounded-3xl border-[0.5px] cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all border-gray-700 ">
                        <Image src="https://i.ibb.co/2d8MDpx/profile-user.png" alt="discord logo" height={30} width={20}/>
                    </div>
                </div>

                {/* TODO: add a dark mode toggle button here */}

            </div>
        </>
    );
}

export default Navbar
