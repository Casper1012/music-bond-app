import React, { useState, useRef } from "react";

const PlaybackSlider = ({ width }) => {
  const [currentTime, setCurrentTime] = useState(10); // Current playback time in seconds
  const [duration, setDuration] = useState(180); // Total duration in seconds (example: 3 minutes)
  const audioRef = useRef(null);

  const handleSliderChange = (event) => {
    const newTime = parseInt(event.target.value, 10);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime; // Update the audio element
    }
  };
// 622px
  return (
    <div className="flex flex-col items-center space-y-2" style={{ width }}>

      {/* Playback Slider */}
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSliderChange}
              className="w-full h-[4px] rounded-[4px] cursor-pointer outline-none appearance-none 
                accent-genre_txt_hover 
                bg-gray-300
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-[11.28px] [&::-webkit-slider-thumb]:w-[11.28px] 
                [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:outline-nones"
        style={{
            background: `linear-gradient(to right, rgba(0,96,217,1) ${(currentTime / duration) * 100}%, #e0e0e0 ${(currentTime / duration) * 100}%)`,
        }}
      />
    </div>
  );
};

export default PlaybackSlider;