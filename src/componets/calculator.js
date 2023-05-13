import './calculator.css'
function Calculator() {

    const buttons = [];

    const ButonCOntrol = ['AC', '+/-', '%', '÷' ,'7' ,'8' ,'9' ,'x','4' ,'5' ,'6' ,'-' ,'1' ,'2' ,'3' ,'+' ,'0' ,',' ,'=']
  
    for (let i = 0; i < ButonCOntrol.length; i++) {
      let buttonClass = 'button';

    if (ButonCOntrol[i] === '0') {buttonClass = 'button-0';
    }
    
    if (['AC', '+/-', '%', '='].includes(ButonCOntrol[i]))buttonClass= 'button-e';
    else if ([ '÷' ,'x' ,'-' ,',' ,'+'].includes(ButonCOntrol[i])) {
      buttonClass = 'button-x';
    }
      buttons.push(<button key={i} name={i} id={i} onClick={() => console.log(`Button ${i} clicked`)} className={buttonClass} >{ButonCOntrol[i]}</button>);
    
    }

    

    
    return (
           
      
      <div className="wrapper">
      <span className="result">222222</span>
      {buttons}
      
      </div>

    )
  }
  
  export default Calculator;