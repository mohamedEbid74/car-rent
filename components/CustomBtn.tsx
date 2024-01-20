"use client";
import React from "react";
import { CustomBtnProps } from "../types/index";
import Image from "next/image";
const CustomBtn = ({
  title,
  isDisabled,
  handleClick,
  btnStyle,
  rightIcone,
  btnType,
}: CustomBtnProps) => {
  return (
    <button
      type={btnType}
      className={`${btnStyle} custom-btn`}
      onClick={handleClick}
    >
      {title}
      {rightIcone && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcone}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
    </button>
  );
};

export default CustomBtn;
