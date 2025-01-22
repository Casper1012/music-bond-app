import React from 'react';
import SideMenu from './SideMenu';
import RightPanel from './RightPanel';
import MusicPlayer from './MusicPlayer';
import MainContent from './MainContent';

const Layout = () => {
  
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-row flex-grow overflow-hidden">
        {/* Side Menu */}
        <SideMenu />

        {/* Main Content (Scrollable Area) */}
        <MainContent />

        {/* Right Panel */}
        <RightPanel />
      </div>

      {/* Music Player (Fixed at the bottom) */}
      <MusicPlayer />
    </div>
  );
};

export default Layout;