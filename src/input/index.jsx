import React from "react";
export const Input = () => {
  const inputRef = React.useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <button onClick={handleClick}>click </button>
      <label htmlFor="cm">hello</label>
      <input ref={inputRef} id="cm" value="" placeholder="write" />
    </>
  );
};
