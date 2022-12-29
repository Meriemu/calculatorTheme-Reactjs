import React, { createContext, useState, useEffect, useRef } from 'react';

// export const checkboxValueContext = createContext();

export const ThemeSwitcher = ({parentCallback}) => {
  const [isRadio, setisRadio] = useState(2);
  const [cbTheme, setCbTheme] = useState({});
// console.log(myFunc)
  const handleRadio= (event) => {
    // console.log("isradio", isRadio)
    setisRadio(+event.currentTarget.value);
    parentCallback(isRadio)
    // console.log(event.currentTarget.value);
  }

  useEffect(() => {
    // handleRadio(event)
    console.log("first")
    // console.table("isradio", isRadio)
  }, []);
  return (
    <div>
      <div className='calculatorSwitcher__wrapper'>
        <div className='calculatorSwitcher__text'>
          <p>calc</p>
          <p>Child : {isRadio}</p>
        </div>
        <form className='calculatorSwitcher'>
          <fieldset id="group2">
            <input checked={isRadio === 1} onChange={handleRadio} className='cb-th1' type="radio" value='1' id="group1" />
            <input checked={isRadio === 2} onChange={handleRadio} className='cb-th2' type="radio" value='2' id="group2" />
            <input checked={isRadio === 3} onChange={handleRadio} className='cb-th3' type="radio" value='3' id="group3" />
            <label className={isRadio === 2 ? 'checklabel' : null} htmlFor=""></label>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default ThemeSwitcher