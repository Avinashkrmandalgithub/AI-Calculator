import React, { useState } from "react";
import { useHistory } from "../context/HistoryContext";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const { addToHistory } = useHistory();

  const handleClick = (value) => {
    if (value === "=") {
      if (!expression.trim()) return;

      // Check for a valid expression: at least one operator and two numbers
      const isValidExpression = /^-?\d+(\.\d+)?([+\-x/]-?\d+(\.\d+)?)+$/.test(
        expression
      );
      if (!isValidExpression) {
        setResult("Invalid expression");
        return;
      }

      try {
        const sanitized = expression.replace(/x/g, "*");
        const evalResult = eval(sanitized);
        setResult(evalResult);
        addToHistory({
          type: "calc",
          question: expression,
          answer: evalResult,
        });
        setExpression("");
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setExpression("");
      setResult("");
    } else if (value === "+/-") {
      // Flip the sign of the last number
      const tokens = expression.match(/([-+]?\d*\.?\d+|\D)/g) || [];
      for (let i = tokens.length - 1; i >= 0; i--) {
        if (!isNaN(tokens[i])) {
          const num = parseFloat(tokens[i]);
          tokens[i] = (num * -1).toString();
          break;
        }
      }
      setExpression(tokens.join(""));
    } else {
      // If result exists, and user clicks number or operator, start fresh
      if (result && !isOperator(value)) {
        setExpression(value);
      } else {
        setExpression((prev) => prev + value);
      }
      setResult("");
    }
  };

  const isOperator = (val) => ["/", "x", "-", "+", "="].includes(val);
  const isFunction = (val) => ["AC", "+/-", "%"].includes(val);
  const isZero = (val) => val === "0";

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full min-h-[420px] flex flex-col justify-between">
      <div className="mb-4">
        <input
          value={result || expression || "0"}
          type="text"
          className="w-full text-right text-2xl p-2 border border-gray-300 rounded-lg focus:outline-none"
          readOnly
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[
          "AC",
          "+/-",
          "%",
          "/",
          "7",
          "8",
          "9",
          "x",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "=",
        ].map((label, index) => (
          <button
            key={index}
            onClick={() => handleClick(label)}
            className={`font-bold py-2 rounded transition-all duration-200
              ${
                isOperator(label)
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : isFunction(label)
                  ? "bg-gray-400 hover:bg-gray-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-black"
              }
              ${isZero(label) ? "col-span-2" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
