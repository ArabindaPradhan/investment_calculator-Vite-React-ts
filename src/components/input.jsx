import React from "react";
import "./input.css";
import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";

const input = ({ getResult }) => {
  const [initialInput, setInitialInput] = useState([10000, 1200, 10, 5]);
  function HandaleChange(oldInp, newInp) {
    console.log("oldInp:", oldInp, "newInp:", newInp);
    const newInputArr = [...initialInput];
    console.log("newInput:", newInputArr);
    newInputArr.map((value, index) => {
      if (value === oldInp) {
        newInputArr[index] = Number(newInp);
      }
      return value;
    });
    setInitialInput(newInputArr);
    let res = calculateInvestmentResults({
      initialInvestment: newInputArr[0],
      annualInvestment: newInputArr[1],
      expectedReturn: newInputArr[2],
      duration: newInputArr[3],
    });
    console.log("result:", res);
    getResult(res);
  }
  return (
    <div className="input-container">
      <div className="investment-form">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInput[0]}
            onChange={(e) => HandaleChange(initialInput[0], e.target.value)}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={initialInput[1]}
            onChange={(e) => HandaleChange(initialInput[1], e.target.value)}
          />
        </div>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            value={initialInput[2]}
            onChange={(e) => HandaleChange(initialInput[2], e.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={initialInput[3]}
            onChange={(e) => HandaleChange(initialInput[3], e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default input;
