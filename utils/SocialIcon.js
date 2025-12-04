// components/SocialIcon.js

import React from "react";
import Link from "next/link";

const SocialIcon = ({ href, target, icon, text }) => {
  return (
    <Link
      href={href}
      target={target}
      className={`text-2xl hover:text-[#ffffff] text-[#B0B2B4] hover:cursor-pointer text-center`}
    >
      {icon}
      {/* <span className=" sm:text-xs hidden sm:flex font-light text-center mt-2 text-[#FAD700]">
        {text}
      </span> */}
    </Link>
  );
};

export default SocialIcon;
