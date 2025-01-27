"use client";
import React from 'react';
import LeftSidebar from '@/components/left-side-bar/LeftSideBar';
import ProfilePage from '@/components/pages-components/profile-page/ProfilePage';
import RedeemPageComponent from '@/components/pages-components/redeem-page/RedeemPage';

const RedeemPage = () => {
    return (
        <div className="dashboardPage min-h-screen bg-gradient-to-br from-gray-900 to-black flex">
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Main Content (Profile Page) */}
            <div className="flex-1">
                <RedeemPageComponent />
                {/* this will be changed with dashboardpage  */}
            </div>
        </div>
    );
};

export default RedeemPage;
