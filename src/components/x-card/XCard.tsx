import React from 'react';
import { useState, useEffect } from 'react';
import './xcard.css';

type Props = {}

const XCard = (props: Props) => {

    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = (event: any) => {
        setIsFollowed(!isFollowed);
    }

    return (
        <>
            <div className="wrapperDivForXCard">



                <div className="xCard flex flex-col  bg-gradient-to-br from-indigo-200 via-blue-100 to-white dark:bg-gradient-to-r dark:from-[#18181c] dark:via-[#090212] dark:to-[#080112] z-[0] justify-start items-start p-2 rounded-xl relative md:right-12 w-[23rem]
             hover:cursor-pointer">
                    {/* top section  */}
                    <div className="flex flex-row justify-between items-center">
                        <div className="rounded-full border-[0.3px] border-gray-600 h-14 w-14 ">
                            <img src="https://pbs.twimg.com/profile_images/1620239980030488577/2Za1tQpH_400x400.png" className='rounded-full' />
                            {/* here is the sub section for name and tag  */}


                        </div>

                        <div className="flex flex-col justify-start ml-4 p-2 items-start">
                            <h3 className='text-lg font-semibold dark:text-white text-gray-900' style={{ fontFamily: "Montserrat, serif" }}>Armaan</h3>
                            <h5 className='text-xs text-[#71717a]' style={{ fontFamily: "Montserrat, serif" }}>@0armaan025</h5>
                        </div>

                        <div className="flex flex-col ml-16 justify-center items-center mr-4">
                            <input
                                type="button"
                                onClick={handleFollow}
                                className={`${!isFollowed ? 'px-4 py-2  hover:bg-[#005bc4] bg-[#0061d1] transition-all cursor-pointer rounded-3xl text-white text-xs font-medium' :
                                    'px-4 py-2  hover:bg-opacity-30 transition-all bg-black border-[0.3px] border-gray-800 cursor-pointer rounded-3xl text-white text-xs font-medium'}`}
                                value={`${isFollowed ? 'Unfollow' : 'Follow'}`}
                            />
                        </div>





                    </div>
                    {/* text section here  */}
                    <div className="flex flex-col mt-3 justify-start items-start w-72">
                        <h2 className='ml-1 text-[#71717a] text-sm' style={{ fontFamily: "Montserrat, serif" }}>Full stack | NextJS | Flutter | @code-leveling dev, he/his/him 🔥</h2>
                    </div>

                    {/* second text section here   */}


                    <div className="flex flex-col mt-3 justify-start items-start w-72">
                        <h2 className='ml-1 text-[#71717a] text-sm' style={{ fontFamily: "Montserrat, serif" }}><span className='font-semibold'>256</span> Following | <span className='font-semibold'>75</span> Followers</h2>

                    </div>

                </div>


            </div>
        </>
    );
}

export default XCard
