import React from 'react'

const CalculatorResult = ({ num, inputRef, setNum }) => {
  return (
    <input onChange={event=> setNum(event.target.value)} 
      className='calculatorResult__container' 
      value={num} 
      ref={inputRef} />
  )
}

export default CalculatorResult