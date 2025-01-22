import React from 'react';
import './xcard.css';

type Props = {}

const XCard = (props: Props) => {
    return (
        <>
            <div className="wrapperDivForXCard">



            <div className="xCard flex flex-col bg-[#18181b] justify-start items-start p-2 rounded-xl relative right-12 hover:cursor-pointer">
                {/* top section  */}
                <div className="flex flex-row justify-between items-center">
                    <div className="rounded-full border-[0.3px] border-gray-600 h-14 w-14 ">
                        <img src="https://pbs.twimg.com/profile_images/1620239980030488577/2Za1tQpH_400x400.png" className='rounded-full' />
                        {/* here is the sub section for name and tag  */}


                    </div>

                    <div className="flex flex-col justify-start ml-4 p-2 items-start">
                            <h3 className='text-lg font-semibold' style={{ fontFamily: "Montserrat, serif" }}>Armaan</h3>
                            <h5 className='text-xs text-[#71717a]' style={{ fontFamily: "Montserrat, serif" }}>@0armaan025</h5>
                        </div>

                    <div className="flex flex-col ml-16 justify-center items-center mr-4">
                        <input type="button" className='px-4 py-2 bg-[#0266d9] hover:bg-[#005bc4] transition-all cursor-pointer rounded-3xl text-white text-xs font-medium' value="Follow" />
                    </div>





                </div>
                {/* text section here  */}
                <div className="flex flex-col mt-3 justify-start items-start w-72">
                        <h2 className='ml-1 text-[#71717a] text-sm' style={{fontFamily: "Montserrat, serif"}}>Full stack | NextJS | Flutter | @code-leveling dev, he/his/him 🔥</h2>
                    </div>

                {/* second text section here   */}


                <div className="flex flex-col mt-3 justify-start items-start w-72">
                <h2 className='ml-1 text-[#71717a] text-sm' style={{fontFamily: "Montserrat, serif"}}><span className='font-semibold'>256</span> Following | <span className='font-semibold'>72</span> Followers</h2>

                </div>

            </div>
            </div>
        </>
    );
}

export default XCard
