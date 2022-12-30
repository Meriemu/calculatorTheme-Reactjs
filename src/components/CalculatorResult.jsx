import React from 'react'

const CalculatorResult = ({ num, inputRef, setNum }) => {
  return (
    <input onChange={event=> setNum(event.target.value)} 
      className='calculatorResult__container' 
      value={num} 
      ref={inputRef}
      placeholder="0"
      disabled />
  )
}

export default CalculatorResult