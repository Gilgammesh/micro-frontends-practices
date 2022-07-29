import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const increase = () => setCount(prev => prev + 1)
  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }

  return (
    <div className="p-4 bg-gray-300">
      <div className="text-2xl mb-1">Counter: {count}</div>
      <button className="bg-blue-600 rounded-full text-3xl text-white w-9" onClick={decrease}>
        -
      </button>
      &nbsp;
      <button className="bg-blue-600 rounded-full text-3xl text-white w-9" onClick={increase}>
        +
      </button>
    </div>
  )
}

export default Counter
