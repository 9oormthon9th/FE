import React from 'react';

const InputLine = ({ placeholder }) => {
    return (
        <>
            <input
                className='border-none focus:border-transparent outline-none'
                placeholder={placeholder}
            />
            <div className='bg-black h-[1px] my-2'></div>
        </>
    );
};

export default InputLine;
