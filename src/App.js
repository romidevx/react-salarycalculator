import React,{useState} from "react";
import "./App.css";

  const App = () => {

  const [salary,setSalary] = useState();
  const [inss,setInss] = useState();
  const [irrf,setIrrf] = useState();
  const [liquidSalary,setLiquidSalary] = useState();

  // CALULATE SALARY
  const calculate = () => {
    const calcInss = (11 / 100) * salary; // 11% TAX
    const calcIrrf = (5 / 100)  * salary; // 5% TAX
    const totalTaxes = calcIrrf + calcInss;

    setInss('- $' + (calcInss * 10).toFixed(2));
    setIrrf('- $' + (calcIrrf * 10).toFixed(2));
    setLiquidSalary((Math.abs(salary - totalTaxes) * 10).toFixed(2));
  }

  // CLEAR STATE
  const clearState = () => {
    setSalary('');
    setInss('');
    setIrrf('');
    setLiquidSalary('');
  }

  return (
    <div className='app'>

      <h1>Calculate Salary</h1>
      <input placeholder='Enter gross salary amount..' value={salary} onChange={e => {
        setSalary(e.target.value);
        calculate();
      }}/><br/>{inss ? <small> Salary Amount<br/></small> : ''}<br/>

      <input placeholder='INSS' value={inss} /><br/>{inss ? <small>INSS 11% <br/></small> : ''}<br/>
      <input placeholder='IRRF' value={irrf}/><br/>{irrf ? <small>IRRF 5% <br/></small> : ''}<br/>

      {liquidSalary ?  <h4>Liquid salary: $ {liquidSalary}</h4> : ''}

      <button onClick={clearState}>Clear values</button>
    </div>
  );
}


export default App;
