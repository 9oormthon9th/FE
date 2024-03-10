import React from 'react';

const InputLine = ({ placeholder, value, onChange }) => {
  return (
    <>
      <input
        className='border-none focus:border-transparent outline-none'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className='bg-black h-[1px] my-2'></div>
    </>
  );
};

export default InputLine;
