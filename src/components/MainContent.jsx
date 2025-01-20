import React from 'react';
import { ReactComponent as Chevron_Icon } from '../assets/svg/chevron-alt.svg';
import { useRef, useState } from "react";

import Geners_Img from './Geners_Img';
import geners_1 from "../assets/img/geners_1.png";
import geners_2 from "../assets/img/geners_2.png";
import geners_3 from "../assets/img/geners_3.png";
import geners_4 from "../assets/img/geners_4.png";
import geners_5 from "../assets/img/geners_5.png";
import right_btn from "../assets/img/right_btn.png";
import left_btn from "../assets/img/left_btn.png";
import right_hover_btn from "../assets/img/right_hover_btn.png";
import left_hover_btn from "../assets/img/left_hover_btn.png";
import eye_icon from "../assets/img/eye.png";
import clock_icon from "../assets/img/clock.png"
import Tracts_Tbl from "../components/tracks_tbl";

const genres = [
  { url: geners_1, text: "Classic rock" },
  { url: geners_2, text: "Jazz" },
  { url: geners_3, text: "Dubstep" },
  { url: geners_4, text: "Rhythm and Blues (R&B)" },
  { url: geners_5, text: "Techno" },
  { url: geners_1, text: "Classic rock" },
  { url: geners_2, text: "Jazz" },
  { url: geners_3, text: "Dubstep" },
  { url: geners_4, text: "Rhythm and Blues (R&B)" },
  { url: geners_5, text: "Techno" },
];

const MainContent = () => {
  const ulRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction) => {
    if (ulRef.current) {
      ulRef.current.scrollTo({
        left:
          direction === "right"
            ? ulRef.current.scrollLeft + 200 // Scroll right
            : ulRef.current.scrollLeft - 200, // Scroll left
        behavior: "smooth", // Smooth animation
      });
    }
  };
  const handleMouseDown = (e) => {
    if (!ulRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ulRef.current.offsetLeft);
    setScrollLeft(ulRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !ulRef.current) return;
    const x = e.pageX - ulRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scroll speed (higher = faster)
    ulRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  return (
    <div className="flex-1 flex flex-col overflow-hidden font-sans text-white bg-mc_customBg gap-[50px] h-[1464px] pt-[64px] pr-[16px] pb-[20px] pl-[25px]">
      {/* Add your main content here */}
      
      <div className='h-[243.96px]'>
        <div className='flex items-center gap-[12px] cursor-default'>
          <span className='font-normal text-2xl leading-[30.24px] items-center justify-center'>Popular genres</span>
          <div className='flex items-end sw-[24px] h-[34px]'>
            <div className='flex items-center justify-center w-[24px] h-[24px]'>
              <Chevron_Icon />
            </div>
          </div>
        </div>
        
        <div className='pr-[14.2px] relative'>
          <button className='absolute z-20 top-[79px] left-[0px] cursor-default group w-[34px] h-[34px]' onClick={() => handleScroll("left")}>
            <img src={left_btn} className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
            <img src={left_hover_btn} className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" alt="Left hover button"/>
          </button>
          <button className='absolute z-20 top-[79px] right-[0px] cursor-default group w-[34px] h-[34px]' onClick={() => handleScroll("right")}>
            <img src={right_btn} className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
            <img src={right_hover_btn} className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" alt="Right hover button"/>
          </button>
          <ul ref={ulRef} className={`relative flex items-start justify-start w-full space-x-[17px] overflow-x-auto scrollbar-hide transition-all duration-300 ease-out`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onMouseUp={handleMouseUp}
          >
              {genres.map((genre, index) => (
                <li className={`flex flex-none flex-col items-center justify-between space-y-1 rounded-md text-white font-bold`} key={index}>
                  <Geners_Img url={genre.url} text={genre.text} />
                </li>
              ))}
          </ul>
        </div>
        
      </div>
      
      <div className='h-[382px]'>
        <div className='flex items-center gap-[12px] cursor-default'>
          <span className='font-normal text-2xl leading-[30.24px] items-center justify-center'>Popular Tracks</span>
          <div className='flex items-end sw-[24px] h-[34px]'>
            <div className='flex items-center justify-center w-[24px] h-[24px]'>
              <Chevron_Icon />
            </div>
          </div>
        </div>
        
        <div className='relative pt-[24px] h-full w-full'>
          <table className='w-full h-[44px] table-fixed'>
            <thead>
              <tr className='h-[44px]'>
                <th className='h-[44px] w-[111px] text-left'>#</th>
                <th className='h-[44px] w-full min-w-0 text-left'>
                  <div>Title</div>
                </th>
                <th className='h-[44px] w-full min-w-0 text-left'>
                  <div>Genres</div>
                </th>
                <th className='h-[44px] w-[65px]'>
                  <div className='flex items-center justify-center'><img src={eye_icon} alt='eye_icon' /></div>
                </th>
                <th className='h-[44px] w-[105px]'>
                  <div className='flex items-center justify-center'><img src={clock_icon} alt='clock icon' /></div>
                </th>
                <th className='h-[44px] w-[76px]'></th>
              </tr>
            </thead>
          </table>
          
          <table className='w-full table-fixed'>          
            <tbody>
              <Tracts_Tbl />
              <Tracts_Tbl />
              <Tracts_Tbl />
              <Tracts_Tbl />
              <Tracts_Tbl />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainContent;