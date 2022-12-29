import React, { useState, useEffect } from 'react';

export const ThemeSwitcher = ({parentCallback}) => {
  const [isRadio, setisRadio] = useState(2);
  
  const handleRadio= (event) => {
    setisRadio(+event.currentTarget.value);
    parentCallback(isRadio)
  }

  useEffect(() => {
      parentCallback(isRadio);
  }, [isRadio]);
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