import React, { useState } from "react";

export const Folder = ({ handleInsertNode = () => {}, data, level = 1 }) => {
  // console.log(data);

  const [isOpen, setIsOpen] = useState(false);

  const [inputData, setInputData] = useState({
    visible: false,
    isFolder: false,
  });

  const handleClick = (e, isFolder) => {
    // console.log("-------");
    e.stopPropagation();
    setIsOpen(true);

    setInputData({
      visible: true,
      isFolder,
    });
  };

  const handleInput = (e) => {
    e.stopPropagation();
    console.log(e);
    const {
      which,
      key,
      code,
      type,
      target: { value },
    } = e;
    if (key === "Enter" && value) {
      console.log(data, value, inputData);
      handleInsertNode(data.id, value, inputData.isFolder);
      setInputData({ ...inputData, visible: false });
    }
    // console.log(e.target.value);
  };

  if (data.isFolder) {
    return (
      <>
        <div
          className="flex flex-col cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <div className="flex flex-row bg-slate-500">
            <span className="font-bold mr-10">📁 {data.name}</span>
            <div className="flex justify-between flex-row">
              <button
                className="mx-1 bg-blue-500"
                onClick={(e) => handleClick(e, true)}
              >
                Folder +
              </button>
              <button
                className="mx-2 bg-green-500"
                onClick={(e) => handleClick(e, false)}
              >
                File +
              </button>
            </div>
          </div>
        </div>
        <div>
          {inputData.visible && (
            <div className="flex flex-center">
              <span>{inputData.isFolder ? "📁" : "📄"}</span>
              <input
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onKeyDown={handleInput}
                onBlur={() => setInputData({ ...inputData, visible: false })}
              />
            </div>
          )}
          {isOpen && (
            <div className={`flex flex-col ml-${10 * level} pl-5`}>
              {data.isFolder &&
                data.items.map((d) => {
                  return (
                    <Folder
                      handleInsertNode={handleInsertNode}
                      data={d}
                      level={level + 1}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <span className="text-left">{data.name}</span>
    </>
  );
};
