import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './Sidebar';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Setting';
import Help from '../Pages/Help';
import TopBar from './Top';
import Portfolio from '../Pages/Portfolio';
import ViewPortfolio from '../Pages/ViewPortfolio';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* TopBar */}
        <TopBar toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <div className="flex-grow bg-gray-100 p-4 overflow-y-auto">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/view-portfolio" element={<ViewPortfolio />} />
            <Route path="*" element={<Navigate to="home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
