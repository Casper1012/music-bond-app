import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { SidemenuContext } from '../context/SidemenuContext';
import header_avatar from "../assets/svg/head_avatar.svg";
import expand_icon from "../assets/svg/expand_more.svg";
import { ReactComponent as BellIcon } from '../assets/svg/bell.svg';
import { ReactComponent as HiddenIcon } from "../assets/svg/hidden_bar.svg";

const Header = () => {
  const { toggleSidebar, isSidebarOpen } = useContext(SidebarContext);
  const { toggleSidemenu, isSidemenuOpen } = useContext(SidemenuContext);
  
  return (
    <div className="h-[64px] resHead flex justify-between text-white font-sans">
      {/* Add header content here, such as a logo or navigation links */}
      <div className='flex items-center mt-[16px] ml-[-4px]'>
        <button onClick={toggleSidemenu}><HiddenIcon className='hidden hidden_btn_left' /></button>
      </div>
      
      <div className='flex items-center gap-[30px] h-[46px] mt-[16px] float-right'>
        <div className='flex items-center justify-center hover:bg-login_hover rounded-full w-[34px] h-[34px] transition-colors duration-300'>
          <BellIcon className="w-full h-full text-current hover:text-genre_txt_hover transition-all duration-300" />
        </div>
        
        <div className='flex w-[185px] items-center cursor-pointer justify-between rounded-[5px] hover:bg-login_hover hover:rounded-[5px] pt-[5px] pr-[10px] pb-[5px] pl-[10px] transition duration-300 ease-in-out'>
          <img src={header_avatar} alt='header avatar' />
          <p className='font-normal text-center text-base leading-[20.16px] cursor-default'>Jenny Wilson</p>
          <img src={expand_icon} alt='expand icon' />
        </div>
        <button onClick={toggleSidebar}><HiddenIcon className='hidden hidden_btn_right' /></button>
      </div>
    </div>
  );
};

export default Header;