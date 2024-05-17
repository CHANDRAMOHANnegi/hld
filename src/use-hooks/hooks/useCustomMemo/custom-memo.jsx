import React, { useState } from "react";
import { useCustomMemo } from "./useCustomMemo";

export const CustomMemo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("Expensive Calculation..");
    return counter * counter;
  };

  const memoisedSquaredValue = useCustomMemo(squaredValue, [counter]);

  return (
    <>
      <h2>Counter: </h2>
      <h2>Squared Counter: {memoisedSquaredValue}</h2>
      <button
        className=" bg-sky-500 hover:bg-sky-700"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <h2>Counter 2: {counter2}</h2>
      <button
        className=" bg-sky-500 hover:bg-sky-700"
        onClick={() => setCounter2(counter2 - 1)}
      >
        Decrement
      </button>
    </>
  );
};

export default CustomMemo;
