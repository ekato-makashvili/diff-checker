import React from "react";

const TextAreaBox = ({ value, onChange, diff, hidden }) => {
  return (
    <div className="w-full  h-[652px] bg-[#F0F7FF] border border-gray-200 rounded relative mt-8 p-2">
      {!hidden ? (
        <textarea
          className="w-full h-full border-none outline-none resize-none p-2"
          value={value}
          onChange={onChange}
          placeholder="დაიწყე წერა..."
        />
      ) : (
        <div className="overflow-auto whitespace-pre-wrap break-words p-2">
          {diff.map((c, i) => (
            <span
              key={i}
              style={{
                backgroundColor:
                  c.type === "added"
                    ? "lightgreen"
                    : c.type === "removed"
                    ? "lightcoral"
                    : "transparent",
              }}
            >
              {c.char}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextAreaBox;
