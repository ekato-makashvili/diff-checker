import "../App.css";
import React, { useState } from "react";
import CompareButton from "./CompareButton";
import TextAreaBox from "./TextAreaBox";
import { charDiff } from "./CharDiff"; // charDiff-ს შეგიძლია გამოიტანო ცალკე ფაილში
import ProgressModal from "./ProgressBox";

const TextDiffApp = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [diffData, setDiffData] = useState({ oldResult: [], newResult: [] });
  const [isComparing, setIsComparing] = useState(false);

  const handleCompare = () => {
    if (loading) return;

    setIsActive(false); // თავიდან ისევ ნაცრისფერი
    setIsComparing(true);
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setDiffData(charDiff(text1, text2));
          setIsActive(true); // ✅ აქ ვასეტებთ აქტიურად შედეგის შემდეგ
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  return (
    <div className="main-container mx-6 my-6 text-sm relative h-full">
      <div className="h-[58px]">
        <div className="flex navbar h-[42px] justify-between buttons">
          <div className="flex navbar items-center text-[#383A48] buttons">
            <div className="rounded-md border-1 border-neutral-200 pt-2 pb-2 py-4 pr-2 me-4">
              <select className="pr-10 ml-2 block w-full" name="lang" id="">
                <option value="ka">ქართული</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="buttons justify-center align-middle items-center pt-3 pb-3">
              <label>
                <input
                  type="checkbox"
                  className="appearance-none w-4 h-4 border-1 border-neutral-200 bg-white rounded mr-2 align-middle"
                />
                ფორმატის შენარჩუნება
              </label>
            </div>
          </div>
          <div className="flex bg-[#383A4899] rounded-md pt-2 pb-2 px-4 py-4 justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 12H8"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="ml-2 text-white">ახლის გახსნა</div>
          </div>
        </div>
      </div>
      <hr className="border-neutral-200 line" />
      <div
        className="text-sm flex flex-col"
      >
        <div className="flex justify-between items-center flex-row flex-xs-col">
          {/* Hide textareas while loading */}
          {!loading ? (
            <>
              <TextAreaBox
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                diff={diffData.oldResult}
                hidden={diffData.oldResult.length > 0} // hide textarea when result exists
              />
              <div className="w-[52px]">
              <svg
                className="rotate-xs"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33337 16L26.6667 16"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 21.3346L5.33337 15.9999L10.6667 10.6653"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.3307 10.6653L26.6654 15.9999L21.3307 21.3346"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </div>
              <TextAreaBox
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                diff={diffData.newResult}
                hidden={diffData.newResult.length > 0} // hide textarea when result exists
              />
            </>
          ) : null}
        </div>
        <div className="flex justify-center mt-8">
          <CompareButton isActive={isActive} onClick={handleCompare} />
          {/* Popup progress modal */}
          <ProgressModal visible={loading} progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default TextDiffApp;
