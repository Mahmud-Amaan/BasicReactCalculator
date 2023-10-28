import React, { useState } from 'react';
import './App.css';

const Calculation = (inputSum) => {
  let totalSum = 0;

  switch (inputSum.i3) {
    case "+":
      totalSum = parseInt(inputSum.i1) + parseInt(inputSum.i2);
      break;
    case "-":
      totalSum = parseInt(inputSum.i1) - parseInt(inputSum.i2);
      break;
    case "/":
      totalSum = parseInt(inputSum.i1) / parseInt(inputSum.i2);
      break;
    case "*":
      totalSum = parseInt(inputSum.i1) * parseInt(inputSum.i2);
      break;
    case "":
      totalSum = "Enter Your Operation";
      break;
    default:
      totalSum = "SyntaxError";
  }

  return (
    <>
      <h1>{totalSum}</h1>
    </>
  );
};

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [operator, setOperator] = useState("");

  const handleCalculate = () => {
    return <Calculation i1={input1} i2={input2} i3={operator} />;
  };

  return (
    <div>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
   <select onChange={(e) => setOperator(e.target.value)}>
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="/">/</option>
    <option value="*">*</option>
   </select>
   <input value={input2} onChange={(e) => setInput2(e.target.value)} />
   {handleCalculate()}
    </div>
  );
}

export default App;
