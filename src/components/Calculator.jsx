import React, { useState } from "react";
import {
  TbLetterC,
  TbHttpDelete,
  TbDivide,
  TbMinus,
  TbPercentage,
  TbPlus,
  TbX,
  TbEqual,
} from "react-icons/tb";
import { PiDotOutlineFill } from "react-icons/pi";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      // Clear the display and result
      setDisplay("");
      setResult("");
    } else if (value === "=") {
      try {
        // Set the result
        setResult(eval(display));
        setDisplay("");
      } catch (error) {
        // Handle invalid expressions
        setResult("Error");
      }
    } else if (value === "Del") {
      // Remove the last character from the display
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className="bg-white h-auto w-80 mx-[20px] my-auto p-4 rounded-lg flex flex-col shadow-xl drop-shadow-lg">
      <div className="p-[15px] text-right border-2 rounded-lg mb-[10px] h-24 flex items-center justify-end text-2xl">
        {display ? display : result ? result : "0"}
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick("C")} className="clear">
          <TbLetterC />
        </button>
        <button onClick={() => handleButtonClick("Del")} className="delete">
          <TbHttpDelete />
        </button>
        <button onClick={() => handleButtonClick("%")} className="operator">
          <TbPercentage />
        </button>
        <button onClick={() => handleButtonClick("/")} className="operator">
          <TbDivide />
        </button>
      </div>
      <div className="row">
        {[7, 8, 9].map((item) => (
          <button onClick={() => handleButtonClick(item)} key={item}>
            {item}
          </button>
        ))}
        <button onClick={() => handleButtonClick("*")} className="operator">
          <TbX />
        </button>
      </div>
      <div className="row">
        {[4, 5, 6].map((item) => (
          <button onClick={() => handleButtonClick(item)} key={item}>
            {item}
          </button>
        ))}
        <button onClick={() => handleButtonClick("-")} className="operator">
          <TbMinus />
        </button>
      </div>
      <div className="row">
        {[1, 2, 3].map((item) => (
          <button onClick={() => handleButtonClick(item)} key={item}>
            {item}
          </button>
        ))}
        <button onClick={() => handleButtonClick("+")} className="operator">
          <TbPlus />
        </button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick("0")} className="zero">
          0
        </button>
        <button onClick={() => handleButtonClick(".")} className="dot">
          <PiDotOutlineFill />
        </button>
        <button onClick={() => handleButtonClick("=")} className="equal">
          <TbEqual />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
