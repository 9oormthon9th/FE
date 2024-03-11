import React from 'react';

const MyButton = ({ text, onClick, disabled = false }) => {
  return (
    <button
      disabled={disabled ? true : false}
      onClick={onClick}
      className={`w-full h-full m-auto
            rounded p-4 text-lg
            transition-colors duration-300 ease-in-out
            bg-white text-primary border-[1px] border-primary
            ${!disabled && `hover:bg-primary hover:text-white hover:cursor-pointer`}
            disabled:opacity-50`}
    >
      {text}
    </button>
  );
};

export default MyButton;
