import React from "react";

const MyButton = ({ text, onClick, disabled = false, variant = false }) => {
  const primaryStyle = `bg-[#555F1A] text-white border-none`;
  const variantStyle = `bg-white text-[#555F1A] border-2 border-[#555F1A]`;

  return (
    <button
      disabled={disabled ? true : false}
      onClick={onClick}
      className={`w-full h-full m-auto rounded p-2 ${
        variant ? variantStyle : primaryStyle
      } disabled:opacity-50`}
    >
      {text}
    </button>
  );
};

export default MyButton;
