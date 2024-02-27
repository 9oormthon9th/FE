import React from "react";

const MyButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-full m-auto rounded bg-red-500 text-white"
    >
      {text}
    </button>
  );
};

export default MyButton;
