import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    const value = e.target.value;
    setNum1(value);
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    setNum2(value);
  };

  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <input
        type="text"
        placeholder="Enter number 1"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={num2}
        onChange={handleNum2Change}
      />
      <div className="buttons">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
      {result !== '' && <h1>Result: {result}</h1>}
    </div>
  );
}

export default App;

