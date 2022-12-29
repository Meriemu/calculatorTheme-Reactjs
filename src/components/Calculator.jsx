import React, { useState, useRef, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import CalculatorResult from './CalculatorResult';

// import { checkboxValueContext } from './ThemeSwitcher'

const Calculator = () => {
   // const cbValueContext = useContext(checkboxValueContext);

   // console.log("cbValueContext: ", cbValueContext);
   const [childToParent, setChildToParent] = useState(2);
   const handleCallback = (childData) =>{
      setChildToParent(childData)
      console.log("childData :;", handleCallback)
  }

  useEffect(() => {
   // handleCallback()
  }, []);
   const inputRef= useRef();

   const btnValues = [
      [7, 8, 9, "del"],
      [4, 5, 6, "+"],
      [1, 2, 3, "-"],
      [".", 0, "/", "*"],
      ["reset", "="]
    ];

   const [num, setNum] = useState("");
   const clickHandler = event => {
      // When user click on Button Focus go to the Input display
      inputRef.current.focus();
      setNum(prevState => prevState + event.target.value)
   }  

   const calculate =(e)=> {
      e.preventDefault();
      // console.log("x : ", num )
      setNum(eval(num))
   }

   const resetCalc =(e)=> {
      e.preventDefault();
      setNum("")
   }
  return (
      <div className='calculator__wrapper th2' style={{
         colorScheme: childToParent=== 1 ? "th1" : childToParent === 2 ? "th2" : childToParent === 2 ? "th3" : ''
         }}>
         <div className='calculator__container'>
            <ThemeSwitcher parentCallback={handleCallback} />
               <p style={{color: 'red'}}>Parent: {childToParent}</p> 
               <form onSubmit={calculate}> 
                  <CalculatorResult  num={num} inputRef={inputRef} setNum={setNum} />
                     <div className='calculatorNB__container'>
                     {
                        btnValues.flat().map((btn, i)=> {
                           return ( 
                              <button className={ btn==="del" || btn==="reset" ? 'btn-del-reset' : btn==="=" ? "btn-Equals": null } 
                                       type='button' key={i} 
                              value={btn}
                              onClick={()=>{
                                 btn ==="=" ? calculate(event) 
                                 : btn ==="del" ? resetCalc(event)
                                 :  clickHandler(event)
                              }}> { btn }</button>)
                        })
                     } 
                  </div>
               </form>
         </div>
      </div>
  )
}

export default Calculator