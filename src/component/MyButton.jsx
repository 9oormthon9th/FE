import React from "react";
import {primaryColor} from "../theme/color";

const MyButton = ({ text, onClick, disabled = false }) => {
  return (
    <button
      disabled={disabled ? true : false}
      onClick={onClick}
      className={`w-full h-full m-auto rounded p-2 bg-[${primaryColor}] text-white disabled:opacity-50`}
    >
      {text}
    </button>
  );
};

export default MyButton;
