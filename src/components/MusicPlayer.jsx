import React from 'react';
import music_player_icon from "../assets/img/music_player.png";
import random_icon from "../assets/svg/random.svg";
import backward_icon from "../assets/svg/step-backward.svg";
import play_icon from "../assets/svg/play.svg";
import forward_icon from "../assets/svg/step-forward.svg";
import repeat_icon from "../assets/svg/repeat-alt.svg";
import PlaybackSlider from "./play_slider";
import volume_icon from "../assets/svg/volume.svg";

const MusicPlayer = () => {
  return (
    <div className="w-full h-[97px] flex items-center gap-[10px] shadow-[0px_-20px_40px_0px_rgba(0,0,0,0.45)] font-sans bg-login_hover text-white pl-[30px] pt-[20px] pr-[30px] pb-[20px] fixed bottom-0 left-0">
      <div className='flex gap-[6px] w-[247px]'>
        <img src={music_player_icon} alt="Music player icon" />
        <div className='flex flex-col gap-[6px] justify-center'>
          <p className='font-bold text-base leading-[20.16px] cursor-default'>Classic rock</p>
          <p className='font-normal text-sm leading-[17.64px] cursor-default'>Lorem ipsum dolor sit ...</p>
        </div>
      </div>
      
      <div className='flex items-center gap-[13px] w-[188px] h-[40px]'>
        <button className='flex items-center justify-center w-[24px] h-[24px]'><img src={random_icon} /></button>
        <button className='flex items-center justify-center w-[24px] h-[24px]'><img src={backward_icon} /></button>
        <button className='flex items-center justify-center w-[24px] h-[24px]'><img src={play_icon} /></button>
        <button className='flex items-center justify-center w-[24px] h-[24px]'><img src={forward_icon} /></button>
        <button className='flex items-center justify-center w-[24px] h-[24px]'><img src={repeat_icon} /></button>
      </div>
      
      <PlaybackSlider width='622px'/>
      <div className='flex items-center pl-[100px]'>
        <button><img src={volume_icon} alt="volume icon" /></button>
        <PlaybackSlider width='87px'/>
      </div>
    </div>
  );
};
export default MusicPlayer;