import React from "react";

const ProgressModal = ({ visible, progress }) => {
  if (!visible) return null;

  return (
    <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[80px] border-1 border-[#E1E1E1] rounded-md p-4 z-50">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1.00006" width="38" height="38" rx="19" fill="white" />
        <rect
          x="1"
          y="1.00006"
          width="38"
          height="38"
          rx="19"
          stroke="#4571E4"
          stroke-width="2"
        />
        <circle cx="20" cy="20.0001" r="4.5" fill="#4571E4" />
      </svg>
      <div className="ml-4">
        <div className="flex text-[#383A4899]">
          <h3 className="mb-2 font-semibold text-[0.6rem]">
            Converting...Thank you For your Patience
          </h3>
        </div>
        <div className="flex">
          <div className="mt-1 text-xs font-medium">{progress}%</div>
          <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600"
              style={{ width: `${progress}%`, transition: "width 0.1s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressModal;
