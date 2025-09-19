import React, { useState, useMemo } from "react";
    import { Link } from "react-router-dom";

// Character-level LCS diff
const charDiff = (oldText, newText) => {
  const m = oldText.length;
  const n = newText.length;

  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Build LCS table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (oldText[i - 1] === newText[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const oldResult = [];
  const newResult = [];

  let i = m,
    j = n;

  // Backtrack LCS
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldText[i - 1] === newText[j - 1]) {
      oldResult.unshift({ char: oldText[i - 1], type: "same" });
      newResult.unshift({ char: newText[j - 1], type: "same" });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      newResult.unshift({ char: newText[j - 1], type: "added" });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      oldResult.unshift({ char: oldText[i - 1], type: "removed" });
      i--;
    }
  }

  return { oldResult, newResult };
};

const CharSpan = ({ charObj }) => {
  let style = {};
  if (charObj.type === "added") style = { backgroundColor: "lightgreen" };
  if (charObj.type === "removed") style = { backgroundColor: "lightcoral" };
  return <span style={style}>{charObj.char}</span>;
};

const TextDiffApp = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const { oldResult, newResult } = useMemo(() => charDiff(text1, text2), [text1, text2]);

  return (
    <div>
      <div>
        <textarea
          placeholder="Old Text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
        <textarea
          placeholder="New Text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      </div>

      <div>
        <div>
          {oldResult.map((c, i) => (
            <CharSpan charObj={c} key={i} />
          ))}
        </div>

        <div>
          {newResult.map((c, i) => (
            <CharSpan charObj={c} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextDiffApp;
