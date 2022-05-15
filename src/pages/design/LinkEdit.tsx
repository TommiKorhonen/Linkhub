import { DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import LinkButton from "./LinkButton";

const filterList = ["filled-normal", "filled-rounded-lg", "filled-rounded-xl"];

const LinkEdit = (document: DocumentData) => {
  const [currentStyle, setCurrentStyle] = useState({});
  const changeStyle = (e: any) => {
    e.stopPropagation();
    setCurrentStyle(e.target.className);
    console.log(e.target.title);
  };

  return (
    <article className="flex flex-col gap-4 p-4 bg-white rounded-md mb-8">
      <h2>Fill</h2>
      <ul className="flex justify-between gap-4">
        {/* <LinkButton rounded="" changeStyle={() => changeStyle} /> */}
        <li
          className="bg-gray-400 p-4 flex-grow"
          onClick={(e) => changeStyle(e)}
          title="testi"
        ></li>
        <li className="bg-gray-400 p-4 flex-grow rounded-3xl "></li>
        <li className="bg-gray-400 p-4 flex-grow rounded-lg"></li>
      </ul>
      <h2>Outline</h2>
      <ul className="flex justify-between gap-4">
        <li className="border border-black p-4 flex-grow "></li>
        <li className="border border-black p-4 flex-grow rounded-3xl "></li>
        <li className="border border-black p-4 flex-grow rounded-lg"></li>
      </ul>
      <h2>Shadow</h2>
      <ul className="flex justify-between gap-4">
        <li className=" shadow-xl bg-gray-400 p-4 flex-grow"></li>
        <li className=" shadow-xl bg-gray-400 p-4 flex-grow rounded-3xl"></li>
        <li className=" shadow-xl bg-gray-400 p-4 flex-grow rounded-lg"></li>
      </ul>
    </article>
  );
};

export default LinkEdit;
