import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const correctWords = useSelector((state) => state.typing.successfulWords);
  const failedWords = useSelector((state) => state.typing.failedWords);
  return (
    <div className="result-box">
      <div>
        <h1>Result</h1>
      </div>
      <div>
        <p>{correctWords.length + failedWords.length} words per minute</p>
        <p>Correct Words: {correctWords.length}</p>
        <p>Wrong Words: {failedWords.length}</p>
      </div>
    </div>
  );
}

export default Result;
