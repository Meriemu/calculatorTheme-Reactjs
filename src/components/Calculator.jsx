import React, { useState, useRef, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import CalculatorResult from './CalculatorResult';

const Calculator = () => {
   const [childToParent, setChildToParent] = useState(1);
   const handleCallback = (childData) =>{
      setChildToParent(childData)
   }
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
      setNum(prevState => prevState + event.target.value);
   }  

   const calculate =(e)=> {
      e.preventDefault();
      setNum(eval(num))
   }

   const resetCalc =(e)=> {
      e.preventDefault();
      setNum("")
   }
   const handleDelete =(e)=> {
      e.preventDefault();
      const lastChar = num.toString().at(-1);
      const lasCharDeleted = num.toString().replace(lastChar, '');
      setNum(lasCharDeleted);
   }
  
   // Coded by animation
   function fadeAnim(){
      var wrapper = document.getElementById("anim-fade");
      wrapper.style.opacity="1";
      wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

      var spans = wrapper.getElementsByTagName("span");

      for(var i=0;i<spans.length;i++){
         spans[i].style.animationDelay = i*80+"ms";
      } 
   }
   function fadeAnim__name(){
      var wrapper__name = document.getElementById("anim-fade__name");
      wrapper__name.style.opacity="1";
      wrapper__name.innerHTML = wrapper__name.textContent.replace(/./g,"<span>$&</span>");

      var spans = wrapper__name.getElementsByTagName("span");

      for(var i=0;i<spans.length;i++){
         spans[i].style.animationDelay = i*80+"ms";
      } 
   }
   useEffect(() => {    
      setTimeout(fadeAnim, 2000);
      setTimeout(fadeAnim__name, 5200);
   }, []);
   
  return (
      <div className={
         'calculator__wrapper '  +
         ( childToParent=== 1 ? "th1" 
         : childToParent === 2 ? "th2" 
         : childToParent === 3 ? "th3" 
         : '')} style={{
         colorScheme: childToParent=== 1 ? "th1" : childToParent === 2 ? "th2" : childToParent === 3 ? "th3" : ''
         }}>
         <div className='calculator__container'>
            <ThemeSwitcher parentCallback={handleCallback} />
               <form onSubmit={calculate}> 
                  <CalculatorResult  num={num} inputRef={inputRef} setNum={setNum} />
                     <div className='calculatorNB__container'>
                     {
                        btnValues.flat().map((btn, i)=> {
                           return ( 
                              <button className={ btn==="del" 
                              || btn==="reset" ?
                               'btn-del-reset' 
                               : btn==="=" ?
                               "btn-Equals"
                               : btn ==='*' ? 'btn-multip'
                               : null } 
                                       type='button' key={i} 
                              value={btn}
                              onClick={()=>{
                                 btn ==="=" ? calculate(event) 
                                 : btn ==="reset" ? resetCalc(event)
                                 : btn ==="del" ? handleDelete(event)
                                 :  clickHandler(event)
                              }}> { btn }</button>)
                        })
                     } 
                  </div>
               </form>
           <div className='codedBy'> 
            <p id='anim-fade'>Frontend Mentor Challenge<br /> Coded by </p>
            <p className='codedBy__name' id='anim-fade__name'><br />Meryem A.</p>
            </div>
         </div>
      </div>
  )
}

export default Calculator