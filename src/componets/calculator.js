import './calculator.css';
import React, { useState } from "react";

function Calculator() {
  const buttons = [];

  // State variables
  const [num, setNum] = useState(0); // Current number being entered
  const [oldnum, setOldnum] = useState(0); // Previous number before an operation
  const [operator, setOperator] = useState(0); // Operator for the current operation

  const ButtonControl = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '='];

  // Generate buttons based on ButtonControl array
  for (let i = 0; i < ButtonControl.length; i++) {
    let buttonClass = 'button';

    if (ButtonControl[i] === '0') {
      buttonClass = 'button-0';
    }

    if (['AC', '+/-', '%', '='].includes(ButtonControl[i])) {
      buttonClass = 'button-e';
    } else if (['÷', 'x', '-', ',', '+'].includes(ButtonControl[i])) {
      buttonClass = 'button-x';
    }

    // Create a button element with event handler and class based on buttonClass
    buttons.push(
      <button
        key={i}
        name={i}
        id={i}
        value={ButtonControl[i]}
        onClick={inputNum}
        className={buttonClass}
      >
        {ButtonControl[i]}
      </button>
    );
  }

  // Handle button click event
  function inputNum(e) {
    const input = e.target.value;

    switch (input) {
      case 'AC':
        // Clear all numbers and operator
        setNum(0);
        setOldnum(0);
        break;
      case '%':
        // Calculate percentage of current number
        setNum(parseFloat(num) / 100);
        break;
      case '+/-':
        // Toggle the sign of the current number
        setNum(-parseFloat(num));
        break;
      case '+':
        // Set the operator to addition and store current number as the previous number
        setOldnum(parseFloat(num));
        setOperator('+');
        setNum(0);
        break;
      case '-':
        // Set the operator to subtraction and store current number as the previous number
        setOldnum(parseFloat(num));
        setOperator('-');
        setNum(0);
        break;
      case 'x':
        // Set the operator to multiplication and store current number as the previous number
        setOldnum(parseFloat(num));
        setOperator('x');
        setNum(0);
        break;
      case '÷':
        // Set the operator to division and store current number as the previous number
        setOldnum(parseFloat(num));
        setOperator('÷');
        setNum(0);
        break;
      case '=':
        // Perform the operation based on the operator
        if (operator === '+') {
          const resultado = parseFloat(oldnum) + parseFloat(num);
          setOldnum(0);
          setNum(resultado);
        } else if (operator === '-') {
          const resultado = parseFloat(oldnum) - parseFloat(num);
          setOldnum(0);
          setNum(resultado);
        } else if (operator === 'x') {
          const resultado = parseFloat(oldnum) * parseFloat(num);
          setOldnum(0);
          setNum(resultado);
        } else if (operator === '÷') {
          const resultado = parseFloat(oldnum) / parseFloat(num);
          setOldnum(0);
          setNum(resultado.toFixed(3)); // Limit the result to 3 decimal places
        }
        break;
      default:
        // Handle numeric inputs
        if (num === 0) {
          setNum(input);
        } else {
          setNum(num + input);
        }
        break;
    }
  }

  return (
    <div className="wrapper">
      <span className="result">{num.toString().replace('.', ',')}</span>
      {buttons}
    </div>
  );
}

export default Calculator;