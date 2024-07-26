import React from "react";

const IconBtn = ({ text, icon, onClick, type, bg = false }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center gap-2  px-[24px] py-[10px] rounded-md text-[14px] font-semibold mt-[36px] ${
        bg ? "bg-gray-200" : "bg-gray-100"
      } border-2`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default IconBtn;
