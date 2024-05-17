import React, { useEffect } from "react";

const areEqual = (prevDeps, currDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== currDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== currDeps[i]) {
      return false;
    }
  }

  return true;
};

export const useCustomMemo = (callback, dependency) => {
  const memoizedRef = React.useRef(null);

  if (
    !memoizedRef.current ||
    !areEqual(memoizedRef.current.dependency, dependency)
  ) {
    memoizedRef.current = {
      value: callback(),
      dependency,
    };
  }

  //   useEffect(() => {
  //     return () => (memoizedRef.current = null);
  //   }, []);
  return memoizedRef.current.value;
};
