import { useEffect, useState } from "react";
// import Accordion from "./accordion";
// import { Clock } from "./analog-clock/clock";
// import BootstrapButton from "./bootstrap-button";
// import Button from "./bootstrap-button/Button";
// import Counter from "./counter";
// import { Input } from "./input";
// import { FileExplorer } from "./1.file-explorer";
// import { Pagination } from "./2.pagination";
// import { CustomMemo } from "./3.use-custom-memo";
import { TicTacToe } from "./4.tic-tac-toe";

export default function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect runs");

  //   return () => {
  //     console.log("return useEffect");
  //   };
  // }, [count]);

  return (
    <div className="App">
      <TicTacToe />
      {/* {count} */}
      {/* <button
        onClick={() => {
          setCount((c) => ++c);
        }}
      >
        click
      </button> */}
      {/* <Accordion
        sections={[
          {
            value: "html",
            title: "HTML",
            contents:
              "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
          },
          {
            value: "css",
            title: "CSS",
            contents:
              "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
          },
          {
            value: "javascript",
            title: "JavaScript",
            contents:
              "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
          },
        ]}
      /> */}
      {/* <BootstrapButton /> */}
      {/* <Input /> */}
      {/* <Counter count={1} /> */}
      {/* <Clock /> */}
      {/* <FileExplorer /> */}
      {/* <Pagination /> */}
      {/* <CustomMemo /> */}
    </div>
  );
}
