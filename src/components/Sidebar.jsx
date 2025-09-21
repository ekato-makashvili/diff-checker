import React from "react";
import logo from "../assets/logo.svg";
import "../App.css";

const Sidebar = () => {
  return (
    <div
      className="bg-[#132450] text-white py-3 pl-3 w-[240px] h-full hidden lg:block"
    >
      <div className="flex justify-end cursor-pointer mr-8">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16667 14.1666L5 9.99992L9.16667 5.83325"
            stroke="white"
            stroke-opacity="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 14.1666L10.8334 9.99992L15 5.83325"
            stroke="white"
            stroke-opacity="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {/* Logo */}
      <div className="p-2 font-bold text-lg flex items-center space-x-2">
        <img src={logo} alt="logo" className="w-[42.65px] h-[44px]" />
        <span className="text-xs">ENAGRAM</span>
      </div>

      {/* Menu */}
      <ul className="mt-8">
        <li className="flex items-center space-x-2 p-3 hover:bg-white hover:text-[#132450] transition-colors duration-200">
          {/* Default white, changes color on hover */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="color"
              d="M21 8L10 19L5 14"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M1.99077 9H1.14702L2.68324 4.63636H3.65909L5.19744 9H4.35369L3.18821 5.53125H3.15412L1.99077 9ZM2.01847 7.28906H4.3196V7.92401H2.01847V7.28906ZM5.77219 9V4.63636H7.44265C7.75799 4.63636 8.02006 4.68608 8.22887 4.78551C8.4391 4.88352 8.59606 5.01776 8.69975 5.18821C8.80487 5.35866 8.85742 5.55185 8.85742 5.76776C8.85742 5.94531 8.82333 6.0973 8.75515 6.22372C8.68697 6.34872 8.59535 6.45028 8.48029 6.52841C8.36523 6.60653 8.23668 6.66264 8.09464 6.69673V6.73935C8.24947 6.74787 8.3979 6.79545 8.53995 6.8821C8.68342 6.96733 8.8006 7.08807 8.89151 7.24432C8.98242 7.40057 9.02788 7.58949 9.02788 7.81108C9.02788 8.03693 8.97319 8.24006 8.86381 8.42045C8.75444 8.59943 8.58967 8.74077 8.3695 8.84446C8.14933 8.94815 7.87234 9 7.53853 9H5.77219ZM6.56268 8.33949H7.41282C7.69975 8.33949 7.90643 8.2848 8.03285 8.17543C8.16069 8.06463 8.22461 7.92259 8.22461 7.74929C8.22461 7.62003 8.19265 7.50355 8.12873 7.39986C8.06481 7.29474 7.9739 7.21236 7.856 7.1527C7.7381 7.09162 7.59748 7.06108 7.43413 7.06108H6.56268V8.33949ZM6.56268 6.49219H7.34464C7.481 6.49219 7.60387 6.46733 7.71325 6.41761C7.82262 6.36648 7.90856 6.29474 7.97106 6.20241C8.03498 6.10866 8.06694 5.99787 8.06694 5.87003C8.06694 5.70099 8.00728 5.56179 7.88796 5.45241C7.77006 5.34304 7.59464 5.28835 7.36168 5.28835H6.56268V6.49219ZM13.4506 6.10866H12.6538C12.631 5.97798 12.5891 5.86222 12.5281 5.76136C12.467 5.65909 12.391 5.57244 12.3001 5.50142C12.2092 5.4304 12.1055 5.37713 11.989 5.34162C11.8739 5.30469 11.7496 5.28622 11.6161 5.28622C11.3789 5.28622 11.1687 5.34588 10.9854 5.4652C10.8022 5.5831 10.6587 5.75639 10.555 5.98509C10.4513 6.21236 10.3995 6.49006 10.3995 6.81818C10.3995 7.15199 10.4513 7.43324 10.555 7.66193C10.6602 7.8892 10.8036 8.06108 10.9854 8.17756C11.1687 8.29261 11.3782 8.35014 11.614 8.35014C11.7447 8.35014 11.8668 8.3331 11.9805 8.29901C12.0955 8.26349 12.1985 8.21165 12.2894 8.14347C12.3817 8.07528 12.4592 7.99148 12.5217 7.89205C12.5856 7.79261 12.6296 7.67898 12.6538 7.55114L13.4506 7.5554C13.4208 7.76278 13.3562 7.95739 13.2567 8.1392C13.1587 8.32102 13.0302 8.48153 12.8711 8.62074C12.712 8.75852 12.5259 8.86648 12.3129 8.9446C12.0998 9.02131 11.8633 9.05966 11.6033 9.05966C11.2198 9.05966 10.8775 8.97088 10.5763 8.79332C10.2752 8.61577 10.038 8.35938 9.8647 8.02415C9.69141 7.68892 9.60476 7.28693 9.60476 6.81818C9.60476 6.34801 9.69212 5.94602 9.86683 5.61222C10.0415 5.27699 10.2795 5.0206 10.5806 4.84304C10.8817 4.66548 11.2227 4.5767 11.6033 4.5767C11.8462 4.5767 12.0721 4.6108 12.2809 4.67898C12.4897 4.74716 12.6758 4.8473 12.8391 4.9794C13.0025 5.11009 13.1367 5.2706 13.2418 5.46094C13.3484 5.64986 13.418 5.86577 13.4506 6.10866Z"
              fill="white"
            />
          </svg>
          <span>მართლმწერი</span>
        </li>
        <li className="menu-item active flex items-center space-x-2 p-3 hover:bg-white hover:rounded-l-full hover:text-[#132450] transition-colors duration-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="color"
              d="M4.71899 11.396H11.095"
              stroke="#132450"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M7.914 4L4.026 13.014"
              stroke="#132450"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M11.7889 13.014L7.91394 4"
              stroke="#132450"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M20 7.56201V13"
              stroke="#132450"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M19.199 8.3491C20.267 9.4171 20.267 11.1481 19.199 12.2151C18.131 13.2831 16.4 13.2831 15.333 12.2151C14.265 11.1471 14.265 9.4161 15.333 8.3491C16.4 7.2811 18.132 7.2811 19.199 8.3491"
              stroke="#132450"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M4 17H20"
              stroke="#132450"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M16 21H4"
              stroke="#132450"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>ტექსტის შედარება</span>
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-white hover:text-[#132450] transition-colors duration-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="color"
              d="M12 3C11.2044 3 10.4413 3.27092 9.87868 3.75315C9.31607 4.23539 9 4.88944 9 5.57143V12.4286C9 13.1106 9.31607 13.7646 9.87868 14.2468C10.4413 14.7291 11.2044 15 12 15C12.7956 15 13.5587 14.7291 14.1213 14.2468C14.6839 13.7646 15 13.1106 15 12.4286V5.57143C15 4.88944 14.6839 4.23539 14.1213 3.75315C13.5587 3.27092 12.7956 3 12 3Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M18 10V11.7778C18 13.428 17.3679 15.0107 16.2426 16.1776C15.1174 17.3444 13.5913 18 12 18C10.4087 18 8.88258 17.3444 7.75736 16.1776C6.63214 15.0107 6 13.428 6 11.7778V10"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M12 18V21"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M9 21H15"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>ხმა</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="color"
              d="M3.33337 8H12.6667"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M8 3.33325L12.6667 7.99992L8 12.6666"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>ტექსტი</span>
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-white hover:text-[#132450] transition-colors duration-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="color"
              d="M16 16L16 4"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M12 21L12 6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M8 19L8 3"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M4 15L4 8"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M20.0537 15.4297L20.0537 10.4297"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>ტექსტი</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="color"
              d="M3.33337 8H12.6667"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M8 3.33325L12.6667 7.99992L8 12.6666"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>ხმა</span>
        </li>
        <li className="flex items-center space-x-2 p-3 hover:bg-white hover:text-[#132450] transition-colors duration-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="color"
              d="M4.99705 21.0038H19.0029C20.1079 21.0038 21.0037 20.108 21.0037 19.003V4.99717C21.0037 3.89214 20.1079 2.99634 19.0029 2.99634H8.99872C7.89369 2.99634 6.99788 3.89214 6.99788 4.99717V19.003C6.99788 20.108 6.10208 21.0038 4.99705 21.0038V21.0038C3.89202 21.0038 2.99622 20.108 2.99622 19.003V7.99842C2.99622 6.89339 3.89202 5.99759 4.99705 5.99759H6.99788"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M10.4994 6.99801H17.5023"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M10.4994 10.9997H17.5023"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="color"
              d="M10.4994 15.0014H17.5023"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>PDF კონვერტაცია</span>
        </li>
      </ul>
      <div className="flex items-center mt-[770px] border-t-1  border-[#9EB9FF33] -m-3">
        <div className="my-5">
          <svg
          className="ml-4"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4966_38)">
              <circle cx="10" cy="10" r="9.5" fill="#9EC8FF" stroke="white" />
              <path
                d="M7.12285 12.7949C6.7485 12.5671 6.47018 12.2546 6.28789 11.8574C6.1056 11.4603 6.01445 11.0078 6.01445 10.5C6.01445 10.0052 6.10723 9.55924 6.29277 9.16211C6.47832 8.76172 6.75339 8.44434 7.11797 8.20996C7.48581 7.97559 7.92689 7.8584 8.44121 7.8584C8.85788 7.8584 9.21432 7.92839 9.51055 8.06836C9.80677 8.20508 10.0607 8.44922 10.2723 8.80078H10.3113C10.4806 8.45247 10.6922 8.20996 10.9461 8.07324C11.2 7.93652 11.5092 7.86816 11.8738 7.86816C12.2905 7.86816 12.6502 7.9707 12.9529 8.17578C13.2557 8.38086 13.4868 8.67546 13.6463 9.05957C13.8058 9.44368 13.8855 9.90104 13.8855 10.4316C13.8855 10.9753 13.8253 11.4505 13.7049 11.8574C13.5877 12.2643 13.4103 12.6452 13.1727 13H11.7322C11.9764 12.6029 12.1587 12.1976 12.2791 11.7842C12.4028 11.3708 12.4646 10.9232 12.4646 10.4414C12.4646 9.92708 12.4044 9.54948 12.284 9.30859C12.1635 9.06445 11.9731 8.94238 11.7127 8.94238C11.4751 8.94238 11.296 9.02702 11.1756 9.19629C11.0551 9.3623 10.9949 9.60645 10.9949 9.92871V10.5C10.9949 11.0111 10.9038 11.4652 10.7215 11.8623C10.5392 12.2594 10.2609 12.5719 9.88652 12.7998C9.51543 13.0277 9.05482 13.1416 8.50469 13.1416C7.95456 13.1416 7.49395 13.026 7.12285 12.7949ZM7.43535 10.5C7.43535 10.9655 7.52324 11.3431 7.69902 11.6328C7.8748 11.9258 8.14336 12.0723 8.50469 12.0723C8.86602 12.0723 9.13783 11.9274 9.32012 11.6377C9.50241 11.3447 9.59355 10.9655 9.59355 10.5C9.59355 10.028 9.50241 9.64876 9.32012 9.3623C9.14108 9.07259 8.86602 8.92773 8.49492 8.92773C8.13685 8.92773 7.86992 9.07259 7.69414 9.3623C7.52161 9.65202 7.43535 10.0312 7.43535 10.5Z"
                fill="#132450"
              />
            </g>
            <defs>
              <clipPath id="clip0_4966_38">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="ml-2 align-middle mr-14">თამარ ონიანი</div>
        <svg cwidth="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5027 12C18.5027 12.2762 18.2788 12.5002 18.0025 12.5002C17.7263 12.5002 17.5023 12.2762 17.5023 12C17.5023 11.7237 17.7263 11.4998 18.0025 11.4998C18.2788 11.4998 18.5027 11.7237 18.5027 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5002 12C12.5002 12.2762 12.2762 12.5002 12 12.5002C11.7237 12.5002 11.4998 12.2762 11.4998 12C11.4998 11.7237 11.7237 11.4998 12 11.4998C12.2762 11.4998 12.5002 11.7237 12.5002 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.49773 12C6.49773 12.2762 6.27378 12.5002 5.99752 12.5002C5.72127 12.5002 5.49731 12.2762 5.49731 12C5.49731 11.7237 5.72127 11.4998 5.99752 11.4998C6.27378 11.4998 6.49773 11.7237 6.49773 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
    </div>
  );
};

export default Sidebar;
