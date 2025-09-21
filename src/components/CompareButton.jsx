import React from "react";

const CompareButton = ({ isActive, onClick }) => {
  return (
    <div
      className={`p-4 w-[142px] rounded-md text-center text-white cursor-pointer flex justify-center items-center
        ${isActive ? "bg-[#4571E4]" : "bg-[#383A4899]"} 
        ${isActive ? "hover:bg-[#3358c6] active:bg-[#2747a3]" : ""}`}
      onClick={onClick}
    >
      {isActive ? (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.488 4.63898V8.17498H15.953H19.488"
              stroke="#F0F7FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.027 8.175C17.67 5.688 15.032 4 12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12"
              stroke="#F0F7FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2">შედარება</span>
        </>
      ) : (
        "შედარება"
      )}
    </div>
  );
};

export default CompareButton;
