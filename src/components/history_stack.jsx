import history_avatar from "../assets/img/history_avatar.png";
import { FaEllipsisV } from "react-icons/fa";
import sharp_hover from "../assets/img/sharp_hover.png";

const History_Stack = () => {
    return (
        <div className="w-full flex items-center p-[10px] gap-[10px] border-b border-tbl_border group hover:bg-tbl_tr_hover_bg">
            <div className="flex flex-col items-center justify-center relative w-[40px] h-[40px]">
                <img className="z-10 hidden group-hover:block" src={ sharp_hover } alt="sharp hover icon" />
                <img className="absolute object-contain transition-opacity duration-300 group-hover:opacity-50" src={history_avatar} alt="History avatar" />
            </div>
            <div className="w-[181px]">
                <p className="text-[14px] leading-[17.64px] cursor-default">Lorem ipsum dolor.....</p>
                <p className="text-[12px] leading-[15.12px] cursor-default">Lorem ipsum dolor.....</p>
            </div>
            <div className="w-[24px] h-[24px] flex items-center justify-center">
                <FaEllipsisV className="hidden group-hover:block flex items-center justify-center text-tbl_star text-[13px]"/>
            </div>
        </div>
    );
}

export default History_Stack;