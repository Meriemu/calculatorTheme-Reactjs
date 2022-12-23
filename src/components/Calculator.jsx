import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import CalculatorResult from './CalculatorResult';

const Calculator = () => {
   const btnValues = [
      ["C", "%", "/"],
      [7, 8, 9, "x"],
      [4, 5, 6, "-"],
      [1, 2, 3, "+"],
      [0, ".", "="],
    ];

  return (
    <div className='calculator__wrapper'>
      <ThemeSwitcher />
      <CalculatorResult  />

      <div className='calculatorNB__container'>
         <div className='calculatorNB__row'> 
             {
               btnValues.flat().map((btn,i)=> {
                  return   <button key={i} 
                     onClick={()=>{

                        btn === "+" || btn === "-" || btn === "x" || btn === "/"
                           ? signsHandler
                        : btn === "%"
                           ? moduloHandler
                        :  btn === "." 
                           ?  comaHandler
                        :  btn === "="
                           ?  equalsHandler
                        :  btn === "C"
                           ?  resetHandler
                        :  numClickHandler

                     }}> { btn }</button>
               })
            } 
         </div>
      </div>
    </div>
  )
}

export default Calculator