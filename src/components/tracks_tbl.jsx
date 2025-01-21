import tbl_avatar from "../assets/img/tbl_avatar.png";
import star_icon from "../assets/svg/star.svg";
import ellipsis_icon from "../assets/svg/ellipsis.svg";
import sharp_hover_icon from "../assets/svg/sharp_hover.svg"

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
                    <img src={star_icon} alt="star icon" />
                </div>
            </td>
            <td className="w-[40px] pr-[16px] group-hover:bg-tbl_tr_hover_bg">
                <div className="flex items-center">
                    <img src={ ellipsis_icon } alt="ellipsis icon"/>
                </div>
            </td>
        </tr>
    );
}

export default Tracts_Tbl;
