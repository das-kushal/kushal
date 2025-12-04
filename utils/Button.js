import React from "react";

export default function Button({ children,onClick,cl }) {
  return (
    <button
      onClick={onClick}
      className={cl ? cl : "text-[#B0B2B4] border sm:w-[150px] sm:text-base text-sm text-center border-gray-700 hover:border-[#EC0000] hover:text-[#ffffff] hover:cursor-pointer focus:cursor-pointer font-semibold py-2 px-4 rounded-xl shadow-2xl focus:outline-none  bg-gray-900"}
    // className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 cursor-pointer rounded-lg text-sm shadow-2xl transition-colors"
    >
      {children}
    </button>
  );
}
