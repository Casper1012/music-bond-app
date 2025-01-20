import tbl_avatar from "../assets/img/tbl_avatar.png";
import { SlStar } from "react-icons/sl";
import { FaEllipsisV } from "react-icons/fa";
import sharp_hover_icon from "../assets/img/sharp_hover.png"

const Tracts_Tbl = () => {
    return (
        <tr className='h-[56px] p-[10px] text-[14px] leading-[17.64px] border-t border-b border-tbl_border group'>
            <td className='w-[111px] group-hover:bg-tbl_tr_hover_bg'>
                <div className='flex items-center justify-center h-[56px] gap-[10px]'>
                    <p className='w-[43px] text-center group-hover:hidden'>1</p>
                    <img src={sharp_hover_icon} className="hidden group-hover:block" />
                    <div className='w-[36px] h-[36px] flex items-center justify-left'>
                        <img src={tbl_avatar} alt='table avatar' className='w-full h-full' />
                    </div>
                </div>
            </td>
            <td className='min-w-0 group-hover:bg-tbl_tr_hover_bg group-hover:text-genre_txt_hover'>
                <div className="flex items-center h-[56px]"><p className="text-left w-full cursor-default">Lorem ipsum dolor sit amet</p></div>
            </td>
            <td className='min-w-0 group-hover:bg-tbl_tr_hover_bg group-hover:text-genre_txt_hover'>
                <div className="flex items-center h-[56px]">
                    <p className="text-left w-full cursor-default">Lorem ipsum dolor sit amet</p>
                </div>
            </td>
            <td className="w-[92px] group-hover:bg-tbl_tr_hover_bg group-hover:text-genre_txt_hover">
                <p className="text-center cursor-default">
                    100k
                </p>
            </td>
            <td className="w-[70px] group-hover:bg-tbl_tr_hover_bg group-hover:text-genre_txt_hover">
                <p className="text-center cursor-default leading-none align-baseline">3:03</p>
            </td>
            <td className="w-[61px] group-hover:bg-tbl_tr_hover_bg">
                <div className="flex items-center justify-center h-[56px] align-baseline">
                    <SlStar className="text-[18px] stroke-[20] text-tbl_star group-hover:text-genre_txt_hover"/>
                </div>
            </td>
            <td className="w-[40px] pr-[16px] group-hover:bg-tbl_tr_hover_bg">
                <div className="flex items-center">
                    <FaEllipsisV className="flex items-center justify-center text-tbl_star text-[13px]"/>
                </div>
            </td>
        </tr>
    );
}

export default Tracts_Tbl;
