import './calculator.css'
import React, {useState} from "react"
function Calculator() {

    const buttons = [];
  
    const [num, setNum] = useState(0);
    const [oldnum, setOldnum] = useState(0);
    const [operator, setOperator] = useState(0);

    const ButonCOntrol = ['AC', '+/-', '%', '÷' ,'7' ,'8' ,'9' ,'x','4' ,'5' ,'6' ,'-' ,'1' ,'2' ,'3' ,'+' ,'0' ,'.' ,'=']
  
    for (let i = 0; i < ButonCOntrol.length; i++) {
      let buttonClass = 'button';

    if (ButonCOntrol[i] === '0') {buttonClass = 'button-0';
    }
    
    if (['AC', '+/-', '%', '='].includes(ButonCOntrol[i]))buttonClass= 'button-e';
    else if ([ '÷' ,'x' ,'-' ,',' ,'+'].includes(ButonCOntrol[i])) {
      buttonClass = 'button-x';
    }
      buttons.push(<button key={i} name={i} id={i} value={ButonCOntrol[i]} onClick={imputNum}  className={buttonClass} >{ButonCOntrol[i]}</button>);
    
    }
    function imputNum(e) {
      const input = e.target.value;
    
      switch (input) {
        case 'AC':
          setNum(0);
          setOldnum(0);
          break;
        case '%':
          setNum(parseFloat(num) / 100);
          break;
        case '+/-':
          setNum(-parseFloat(num));
          break;
        case '+':
          setOldnum(parseFloat(num));
          setOperator('+');
          setNum(0);
          break;
        case '-':
          setOldnum(parseFloat(num));
          setOperator('-');
          setNum(0);
          break;
        case 'x':
          setOldnum(parseFloat(num));
          setOperator('x');
          setNum(0);
          break;
        case '÷':
          setOldnum(parseFloat(num));
          setOperator('÷');
          setNum(0);
          break;
        case '=':
          if (operator === '+') {
            const resultado = (parseFloat(oldnum) + parseFloat(num)).toFixed(3);
            setOldnum(0);
            setNum(resultado);
          } else if (operator === '-') {
            const resultado = (parseFloat(oldnum) - parseFloat(num)).toFixed(3);
            setOldnum(0);
            setNum(resultado);
          } else if (operator === 'x') {
            const resultado = (parseFloat(oldnum) * parseFloat(num)).toFixed(3);
            setOldnum(0);
            setNum(resultado);
          } else if (operator === '÷') {
            const resultado = (parseFloat(oldnum) / parseFloat(num)).toFixed(3);
            setOldnum(0);
            setNum(resultado);
          }
          break;
        default:
          if (num === 0) {
            setNum(parseFloat(input));
          } else {
            setNum(parseFloat(num) + parseFloat(input));
          }
          break;
      }
    }


    
    return (
           
      
      <div className="wrapper">
      <span className="result">{num}</span>
      {buttons}
      
      </div>

    )
  }
  
  export default Calculator;