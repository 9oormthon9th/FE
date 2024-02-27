import React from "react";

const MyButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full m-auto rounded p-2 bg-[#555F1A] text-white"
    >
      {text}
    </button>
  );
};

export default MyButton;
