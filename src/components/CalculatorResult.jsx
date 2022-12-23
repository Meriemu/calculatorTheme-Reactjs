import React from 'react'

const CalculatorResult = ({ showNb }) => {
  // console.log("first", showNb)
  return (
    <div className='calculatorResult__container'>
      {showNb}
    </div>
  )
}

export default CalculatorResult