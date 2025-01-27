"use client";
import React from 'react';
import LeftSidebar from '@/components/left-side-bar/LeftSideBar';
import ProfilePage from '@/components/pages-components/profile-page/ProfilePage';
import ShopPageComponent from '@/components/pages-components/shop-page/ShopPage';
const ShopPage = () => {
    return (
        <div className="dashboardPage min-h-screen bg-gradient-to-br from-gray-900 to-black flex">
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Main Content (Profile Page) */}
            <div className="flex-1">
                <ShopPageComponent />
                {/* this will be changed with dashboardpage  */}
            </div>
        </div>
    );
};

export default ShopPage;
