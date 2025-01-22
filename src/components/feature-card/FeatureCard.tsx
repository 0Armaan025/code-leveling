import React from 'react';
import Image from 'next/image';

type Props = {
    logoUrl: string;
    featureTitle: string;
    featureContent: string;
}

const FeatureCard = (props: Props) => {
    return (
        <div className="featureCard  sm:h-40 h-auto sm:w-72 w-full hover:cursor-pointer  py-4 px-4 rounded-xl flex flex-col bg-gradient-to-r from-[#18181c] via-[#090212] to-[#080112] bg-opacity-40 backdrop-blur-[0.2px] border border-transparent shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-all ease-in-out duration-200 justify-between items-start">

            {/* Top section */}
            <div className="flex flex-row justify-start items-center">
                <div className="bg-[#2a0f45] rounded-full w-10 h-10 p-2">
                    <Image src={props.logoUrl} alt="feature logo" width={80} height={80} />
                </div>
                <h3 className="text-[#fff] ml-2 font-semibold text-sm" style={{ fontFamily: "Montserrat, serif" }}>
                    {props.featureTitle}
                </h3>
            </div>

            {/* Content section */}
            <h3 className="mt-6 text-[#747475] w-60 sm:w-auto mb-3 text-sm sm:text-base">
                {props.featureContent}
            </h3>

        </div>
    );
}

export default FeatureCard;
