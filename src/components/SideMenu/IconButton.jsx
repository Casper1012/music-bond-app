import React from 'react';

const IconButton = ({ icon, text, variant = "primary" }) => {
    const baseStyles = "flex items-center h-[50px] w-[100%] p-[10px] gap-[10px]";
    
    const variants = {
        primary: "text-white border-l-[4px] border-sm_borderFocus bg-sm_customFocus rounded-[5px]",
        secondary: "group text-white border-l-[4px] border-sm_customBg border-transparent bg-transparent rounded-none hover:border-sm_borderFocus hover:bg-sm_customFocus hover:rounded-[5px] transition-all duration-300 ease-in-out",
        outlined: "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-100",
    };
    
    return (
        <button
            className={`${baseStyles} ${variants[variant]}`}
        >
            {icon && <span className='flex items-center justify-center w-[30px] h-[30px] hover:text-sm_borderFocus'>
                        {icon}
                    </span>}
            <span className='flex items-center justify-center font-sans text-base'>{text}</span>
        </button>
    );
};

export default IconButton;