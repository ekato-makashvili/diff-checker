import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="w-full lg:hidden">
      <div className="bg-[#132450] flex justify-between items-center p-4 h-[60px]">
        {/* Logo */}
        <div className="p-2 font-bold text-lg flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-[42.65px] h-[44px]" />
          <span className="text-xs text-white">ENAGRAM</span>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex items-center mx-6 align-middle navbar-wrapper-mobile navbar-wrapper-md">
        <svg
          className="mx-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.71899 11.396H11.095"
            stroke="#132450"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.914 4L4.026 13.014"
            stroke="#132450"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.789 13.014L7.914 4"
            stroke="#132450"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 7.56201V13"
            stroke="#132450"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.199 8.3491C20.267 9.4171 20.267 11.1481 19.199 12.2151C18.131 13.2831 16.4 13.2831 15.333 12.2151C14.265 11.1471 14.265 9.4161 15.333 8.3491C16.4 7.2811 18.132 7.2811 19.199 8.3491"
            stroke="#132450"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 17H20"
            stroke="#132450"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 21H4"
            stroke="#132450"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h className="mx-1 font-bold">ტექსტის შედარება</h>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4984_486)">
            <path
              d="M4.3225 4.66797L7 7.33964L9.6775 4.66797L10.5 5.49047L7 8.99047L3.5 5.49047L4.3225 4.66797Z"
              fill="#132450"
              fill-opacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_4984_486">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="matrix(-1 0 0 1 14 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Header;
