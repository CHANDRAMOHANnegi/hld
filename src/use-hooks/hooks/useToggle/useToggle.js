import React from "react";

export const useToggle = (init) => {
  const [val, setVal] = React.useState(init);

  const toggle = React.useCallback(() => {
    setVal((val) => !val);
  }, []);

  return {
    toggle,
    value: val,
  };
};
