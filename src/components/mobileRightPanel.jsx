import React, { useContext, useRef, useEffect } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { FaHistory } from "react-icons/fa";
import History_Stack from './history_stack';
import music_avatar from "../assets/img/music_girl.png";
import etherium_icon from "../assets/svg/ethereum.svg";
import bitcoin_icon from "../assets/svg/bitcoin.svg";
import arrow_right from "../assets/svg/arrow_right.svg";

const MobileRightPanel = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const panelRef = useRef(null);

  useEffect(() => {
    // Close the panel when clicking outside of it
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        event.stopPropagation(); // Stop other actions from firing immediately
        event.preventDefault(); // Prevent unwanted behaviors
        
        closeSidebar(); // Close the panel
      }
    };

    // Add the event listener when the panel is open
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or the panel is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, closeSidebar]);
  
  return (
    <div ref={panelRef} className="z-50 fixed top-0 right-0 w-[314px] h-screen flex flex-col text-white font-sans bg-mc_customBg border-l-2 border-tbl_border pl-2 pt-[26px] pr-6 pb-0 transition-all duration-300 ease-in-out">
      <div className='flex items-center gap-[12px] w-[104px] flex-shrink-0'>
        <div className='flex items-center justify-center p-[4.25px]'>
          <FaHistory className='text-history_icon stroke-[0.1]' />
        </div>
        <p className='text-center font-normal text-[20px] leading-[25.2px] cursor-default'>History</p>
      </div>
      
      <div className='w-full pt-[9px] flex-shrink-0'>
        <History_Stack />
        <History_Stack />
        <History_Stack />
        <History_Stack/>
      </div>
      
      <div className='relative flex-1 h-full'>
        <div className='resRightPanelAvatar absolute bottom-[45px] w-[247px] h-[334px] rounded-[17.39px] mt-[48px] ml-[24px]' style={{ backgroundImage: `linear-gradient(360deg, rgba(5,5,5,0.78) 26.1%, rgba(5,5,5,0) 99.98%), url(${music_avatar})` }}>
          <div className='flex flex-col gap-[5px] items-center pt-[118px] pl-[11px] pr-[10px] pb-[8.59px] w-full h-full'>
            <div className='flex items-center justify-center font-normal pt-[10px] w-[206px] h-[46px]'>
              <p className='text-center text-[18px] leading-[22.68px] whitespace-normal cursor-default'>Access now and<br/> start to win
              </p>
            </div>
            <span className='flex'>
              <img src={ etherium_icon } alt="Etherium" />
              <img src={ bitcoin_icon } alt="Bitcoin" />
            </span>
            <div className='flex flex-col w-[190px] h-[92px] gap-[20px]'>
              <button className='font-semibold text-[14px] leading-[19.1px] hover:translate-y-[-1px] transition-transform border-2 h-[36px] rounded-[20px] hover:bg-login_hover hover:text-genre_txt_hover transition ease-in-out duration-500'>Login</button>
              <button className='flex items-center justify-center gap-[10px] h-[36px] rounded-[20px] bg-register_btnBg hover:shadow-custom-blue hover:bg-genre_txt_hover hover:translate-y-[-1px] transition-transform transition ease-in-out duration-500'>
                Register<img src={ arrow_right } alt="arrow right"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileRightPanel;