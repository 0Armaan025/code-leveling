import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    logoUrl: string;
    title: string;
    url: string;
    description: string;
};

const CommunityCard = (props: Props) => {
    return (
        <div className="communityCard cursor-pointer mr-6 mt-2 sm:mt-16 flex flex-col justify-start items-start p-4 rounded-xl dark:border-gray-700 border-gray-200 dark:bg-gradient-to-r dark:from-[#18181c] dark:via-[#090212] dark:to-[#080112] bg-gradient-to-br from-indigo-200 via-blue-100 to-white
 border-[0.5px] sm:w-[300px] w-full transition-transform hover:scale-105 shadow-md dark:shadow-none">
            {/* Upper Section */}
            <div className="flex flex-row justify-start items-center">
                <Image
                    src={props.logoUrl}
                    alt="LOGO"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                />
                <h3
                    className="dark:text-white text-gray-900 text-lg font-semibold ml-4"
                    style={{ fontFamily: 'Montserrat, serif' }}
                >
                    {props.title}
                </h3>
                <Link href={props.url}>
                    <Image
                        src="https://i.ibb.co/d6J0rtr/link.png"
                        alt="OPEN LINK LOGO"
                        width={20}
                        height={20}
                        className="ml-2"
                    />
                </Link>
            </div>

            {/* Text Section */}
            <div className="mt-4 w-full">
                <h3
                    className="text-[#7f7f87] font-medium text-md sm:w-auto w-full"
                    style={{ fontFamily: 'Montserrat, serif' }}
                >
                    {props.description}
                </h3>
            </div>
        </div>
    );
};

export default CommunityCard;
