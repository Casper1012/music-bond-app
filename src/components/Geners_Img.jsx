import play_icon from "../assets/img/play_btn.png";

const Geners_Img = ({ url, text }) => {
    return (
        <div className="group top-[24px] left-[17px] relative">
            <div className="top-[57%] right-[12px] z-10 absolute opacity-0 group-hover:opacity-100 group-hover:top-[-24px] transition-all duration-300 ease-in-out">
                <img src={play_icon} className="cursor-pointer rounded-full"/>
            </div>
            
            
            <div className="relative  group-hover:shadow-[0px_0px_20px_0px_rgba(6,116,252,0.2)] transition-all duration-300 ease-in-out">
                <img className="opacity-100 group-hover:translate-x-[0.3px] group-hover:translate-y-[-0.3px] group-hover:opacity-50 transition-all duration-300 ease-in-out" src={url} alt="Description" onDragStart={(e) => e.preventDefault()} />
            </div>
            <p className='cursor-default group-hover:translate-x-[0.2px] group-hover:translate-y-[-0.2px] min-h-[60px] text-white group-hover:text-genre_txt_hover text-center font-bold text-sm leading-[17.64px] mt-[6px] whitespace-normal w-[137px] transition-all duration-300 ease-in-out'>{ text }</p>
        </div>
    );
}
 
export default Geners_Img;