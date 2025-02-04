import React from 'react';
import CommunityCard from './community-card/CommunityCard';

type Props = {};

const Community = (props: Props) => {
    return (
        <div className="community flex flex-col justify-center items-center px-4 sm:px-8">
            {/* Header Section */}
            <div className="mb-0 text-center">
                <h3
                    className="text-3xl dark:text-white text-gray-900 font-semibold"
                    style={{ fontFamily: 'Montserrat, serif' }}
                >
                    Community
                </h3>
                <h4
                    className="text-xl text-[#4d4d51] font-medium mt-2"
                    style={{ fontFamily: 'Montserrat, serif' }}
                >
                    Get involved in our community. Everyone is welcome!
                </h4>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <CommunityCard
                    url=""
                    logoUrl="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                    title="X"
                    description="For announcements, tips, and general information."
                />
                <CommunityCard
                    url=""
                    logoUrl="https://cdn-icons-png.flaticon.com/128/5968/5968756.png"
                    title="Discord"
                    description="To get involved in the community, ask doubts and share tips."
                />
                <CommunityCard
                    url=""
                    logoUrl="https://cdn-icons-png.flaticon.com/128/15466/15466168.png"
                    title="Github"
                    description="To report bugs, request features and contribute to the project."
                />
            </div>
        </div>
    );
};

export default Community;
