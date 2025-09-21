import React from "react";

const TextResultBox = ({ diff }) => {
  return (
    <div className="w-[540px] h-[432px] p-2 border rounded-md overflow-auto bg-white">
      {diff.length === 0 ? null : diff.map((c, i) => {
        let style = {};
        if (c.type === "added") style = { backgroundColor: "lightgreen" };
        if (c.type === "removed") style = { backgroundColor: "lightcoral" };
        return <span key={i} style={style}>{c.char}</span>;
      })}
    </div>
  );
};

export default TextResultBox;
