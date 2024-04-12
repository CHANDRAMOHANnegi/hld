import React from "react";
import "./style.css";

export default function Accordion({ sections = [] }) {
  const [opened, setOpened] = React.useState(new Set());

  const handleClick = (value) => {
    const isExpanded = opened.has(value);

    const newSet = new Set(opened);
    if (isExpanded) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setOpened(newSet);
  };

  return (
    <div>
      {sections.map((acc) => {
        const isExpanded = opened.has(acc.value);
        return (
          <div key={acc.value}>
            <div
              onClick={() => {
                handleClick(acc.value);
              }}
            >
              {acc.title} <span aria-hidden={true} className="accordion-icon" />
            </div>
            <div hidden={!isExpanded}>{acc.contents}</div>
          </div>
        );
      })}
    </div>
  );
}
