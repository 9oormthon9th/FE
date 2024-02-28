import React from "react";
import {primaryColor} from "../theme/color";

const MyButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-full m-auto rounded p-2 bg-[${primaryColor}] text-white`}
    >
      {text}
    </button>
  );
};

export default MyButton;
