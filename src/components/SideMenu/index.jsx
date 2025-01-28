import React from 'react';
import Header_Title from './header_title';
import IconButton from './IconButton';
import { ReactComponent as Home_Icon } from '../../assets/svg/home-alt.svg';
import { ReactComponent as Geners_Icon } from '../../assets/svg/geners-alt.svg'; 
import { ReactComponent as Star_Icon } from '../../assets/svg/star-alt.svg';
import { ReactComponent as Arrow_Icon } from '../../assets/svg/right-alt.svg';
// import { IoHomeOutline } from "react-icons/io5";

const SideMenu = () => {
    return (
        <div className="resSidebarMenu flex flex-col w-[266px] h-screen bg-sm_customBg pt-5 pr-2 pb-5 pl-2">
                {/* Header in the Side Menu */}
                <div className="pt-[10px] pr-[25px] pb-[10px] pl-[25px] flex-shrink-0">
                    <Header_Title />
                </div>

                {/* Body in the Side Menu */}
                <div className='flex flex-col flex-1 h-full pt-[20px] pr-[12.5px] pb-[0] pl-[12.5px] justify-between'>
                    <div className='h-[361px] gap-[10px] flex flex-col'>
                        <IconButton
                            icon={ <Home_Icon/> }
                            text="Home"
                            variant='primary'                            
                        />
                        <IconButton
                            icon={ <Geners_Icon className="text-blue-500 group-hover:text-white transition duration-300"/> }
                            text="Geners"
                            variant='secondary'                            
                        />
                        <IconButton
                            icon={ <Star_Icon className="text-blue-500 group-hover:text-white transition duration-300"/> }
                            text="Favorites"
                            variant='secondary'                            
                        />
                    </div>
                    <div className='h-[236px] gap-[10px] flex flex-col mb-[127px]'>
                        <div className='flex flex-col gap-[10px] h-[208px] bg-sm_connectBg rounded-[15px] pt-[16px] pr-[4px] pb-[16px] pl-[16px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <p className='text-white font-bold text-base font-sans'>
                                    You can receive part of
                                    the royalties of a song,
                                    just by listening it
                                </p>
                                <p className='text-white font-normal text-sm leading-[1.25rem] font-sans'>
                                    All the royalties will be
                                    distributed using our own
                                    TunedCoin token
                                </p>
                            </div>
                            <button className='flex items-center justify-center gap-[10px] w-[189px] h-[36px] rounded-[20px] bg-custom-gradient hover:bg-red-300 hover:shadow-custom-blue hover:transition-y-[-2px] transition-transform transition duration-300 ease-in-out'>
                                <span className='text-white font-sans font-bold text-sm'>Connect your wallet</span>
                                <span className='flex items-center text-white w-[20px] h-[20px]'><Arrow_Icon /></span>
                            </button>
                        </div>
                        
                        <div>
                            <p className='text-white text-center font-sans text-sm font-normal leading-[1.25rem]'>Loremipsu © 2022 Versión 1.1</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SideMenu;