import React from "react";
import { useSelector } from "react-redux";

function Timer() {
  const countdown = useSelector((state) => state.typing.countdown);
  return (
    <div>
      <h1>Time : {countdown < 0 ? 0 : countdown}</h1>
    </div>
  );
}

export default Timer;
