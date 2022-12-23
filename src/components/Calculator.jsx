import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import CalculatorResult from './CalculatorResult';

const Calculator = () => {
   const [nb, setNb ]= useState(0);
   const handleOperation=(nbr)=> {
      setNb(nbr);
      // setNb(prevState =>  ({nbr: prevState.nbr +1 }) );
      console.log("couleur : ", nbr)

      if(nbr === 'reset') {
         setNb(0);
      }
   }
//   useEffect(() => {
//    handleOperation(nb);
//   }, [nb]);
  return (
    <div className='calculator__wrapper'>
      <ThemeSwitcher />
      <CalculatorResult showNb={nb} />

      <div className='calculatorNB__container'>
         <div className='calculatorNB__row'> 
            <button onClick={()=>handleOperation(7)} value='7'> 7 </button>
            <button onClick={()=>handleOperation(8)} value='8'> 8 </button>
            <button onClick={()=>handleOperation(9)} value='9'> 9 </button>
            <button> DEL </button>
         </div>
         <div className='calculatorNB__row'> 
            <button onClick={()=>handleOperation(4)} value='4'> 4 </button>
            <button onClick={()=>handleOperation(5)} value='5'> 5 </button>
            <button onClick={()=>handleOperation(6)} value='6'> 6 </button>
            <button> + </button>
         </div>
         <div className='calculatorNB__row'> 
            <button onClick={()=>handleOperation(1)} value='1'> 1 </button>
            <button onClick={()=>handleOperation(2)} value='2'> 2 </button>
            <button onClick={()=>handleOperation(3)} value='3'> 3 </button>
            <button> - </button>
         </div>
         <div className='calculatorNB__row'> 
            <button onClick={()=>handleOperation('.')}> . </button>
            <button onClick={()=>handleOperation(0)}> 0 </button>
            <button onClick={()=>handleOperation('/')}> / </button>
            <button onClick={()=>handleOperation('x')}> x </button>
         </div>
         <div className='calculatorNB__row'> 
            <button onClick={()=>handleOperation('reset')}> RESET </button>
            <button onClick={()=>handleOperation('=')}> = </button>
         </div>
      </div>
    </div>
  )
}

export default Calculator