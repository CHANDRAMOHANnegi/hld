import React, { useState } from "react";
import { useCustomMemo } from "../hooks/useCustomMemo";

export const CustomMemo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("Expensive Calculation..");
    return counter * counter;
  };

  const memoisedSquaredValue = usepr(squaredValue, [counter]);

  return <></>;
};

export default CustomMemo;
