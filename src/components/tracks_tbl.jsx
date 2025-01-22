import tbl_avatar from "../assets/img/tbl_avatar.png";
// import star_icon from "../assets/svg/star.svg";
import {ReactComponent as StarIcon} from "../assets/svg/star.svg"
import ellipsis_icon from "../assets/svg/ellipsis.svg";
import sharp_hover_icon from "../assets/svg/sharp_hover.svg"

const Tracts_Tbl = () => {
    return (
        <tr className='h-[56px] p-[10px] text-[14px] leading-[17.64px] border-t border-b border-tbl_border group'>
            <td className='group-hover:bg-tbl_tr_hover_bg' style={{ width: "12.5%" }}>
                <div className='flex items-center justify-center h-[56px] gap-[25px]'>
                    <p className='w-[43px] text-center group-hover:hidden'>1</p>
                    <img src={sharp_hover_icon} className="hidden group-hover:block" />
                    <div className='w-[36px] h-[36px] flex items-center justify-left'>
                        <img src={tbl_avatar} alt='table avatar' className='w-full h-full' />
                    </div>
                </div>
            </td>
            <td className='group-hover:bg-tbl_tr_hover_bg group-hover:text-genre_txt_hover' style={{ width: "29.9%" }}>
                <div className="flex items-center h-[56px]"><p className="text-left w-full cursor-default">Lorem ipsum dolor sit amet</p></div>
            </td>
            <td className='group-hover:bg-tbl_tr_hover_bg group-hover:text-genre_txt_hover' style={{ width: "26.65%" }}>
                <div className="flex items-center h-[56px]">
                    <p className="text-left w-full cursor-default">Lorem ipsum dolor sit amet</p>
                </div>
            </td>
            <td className="group-hover:bg-tbl_tr_hover_bg group-hover:text-genre_txt_hover" style={{ width: "11.5%" }}>
                <p className="text-center cursor-default">
                    100k
                </p>
            </td>
            <td className="group-hover:bg-tbl_tr_hover_bg group-hover:text-genre_txt_hover" style={{ width: "8.76%" }}>
                <p className="text-center cursor-default leading-none align-baseline">3:03</p>
            </td>
            <td className="group-hover:bg-tbl_tr_hover_bg" style={{ width: "7.63%" }}>
                <div className="flex items-center justify-center h-[56px] align-baseline">
                    <StarIcon className="text-current group-hover:text-genre_txt_hover" />
                </div>
            </td>
            <td className="group-hover:bg-tbl_tr_hover_bg">
                <div className="flex items-center">
                    <img src={ ellipsis_icon } alt="ellipsis icon"/>
                </div>
            </td>
        </tr>
    );
}

export default Tracts_Tbl;
