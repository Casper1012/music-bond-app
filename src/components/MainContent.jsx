import React from 'react';
import { ReactComponent as Chevron_Icon } from '../assets/svg/chevron-alt.svg';

import Geners_Img from './Geners_Img';
import geners_1 from "../assets/img/geners_1.png";
import geners_2 from "../assets/img/geners_2.png";
import geners_3 from "../assets/img/geners_3.png";
import geners_4 from "../assets/img/geners_4.png";
import geners_5 from "../assets/img/geners_5.png";

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
  return (
    <div className="flex-1 flex flex-col overflow-hidden font-sans text-white bg-mc_customBg gap-[50px] h-[1464px] pt-[64px] pr-[16px] pb-[20px] pl-[25px]">
      {/* Add your main content here */}
      
      <div className='h-[243.96px]'>
        <div className='flex items-center gap-[12px]'>
          <span className='font-normal text-2xl leading-[30.24px] items-center justify-center'>Popular genres</span>
          <div className='flex items-end sw-[24px] h-[34px]'>
            <div className='flex items-center justify-center w-[24px] h-[24px]'>
              <Chevron_Icon />
            </div>
          </div>
        </div>
        
        <div className='pt-[24px] gap-[17px]'>
            {/* {genres.map((genre, index) => (
              <Geners_Img url={genre.url} text={genre.text} />
            ))} */}
          <ul className="flex items-start justify-start w-full space-x-4 overflow-x-auto stories secure-container">
            
              {genres.map((genre, index) => (
                <li className={`flex flex-none flex-col items-center cursor-pointer justify-between space-y-1 rounded-md text-white font-bold `} key={index}>
                  <Geners_Img url={genre.url} text={genre.text} />
                </li>
              ))}
            
          </ul>
        </div>
        
      </div>
      
      <div className='h-[382px]'>
      </div>
    </div>
  );
};

export default MainContent;