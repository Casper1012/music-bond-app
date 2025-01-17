
const Geners_Img = ({ url, text }) => {
    return (
        <div>
            <img src={url} alt="Description"/>
            <p className='text-center font-bold text-sm leading-[17.64px] mt-[6px] whitespace-normal w-[137px]'>{ text }</p>
        </div>
    );
}

export default Geners_Img;