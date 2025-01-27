"use client";
import React from 'react';
import LeftSidebar from '@/components/left-side-bar/LeftSideBar';
import ProfilePage from '@/components/pages-components/profile-page/ProfilePage';
import ItemsPageComponent from '@/components/pages-components/items-page/ItemsPage';

const ItemsPage = () => {
    return (
        <div className="dashboardPage min-h-screen bg-gradient-to-br from-gray-900 to-black flex">
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Main Content (Profile Page) */}
            <div className="flex-1">
                <ItemsPageComponent />
                {/* this will be changed with dashboardpage  */}
            </div>
        </div>
    );
};

export default ItemsPage;
