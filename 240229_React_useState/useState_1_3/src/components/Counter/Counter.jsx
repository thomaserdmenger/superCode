import { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  const decrementCount = () => {
    if (count < 1) return
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <section className='counter'>
      <div className='counter__top-container'>
        <button onClick={decrementCount}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>
      <div className='counter__bottom-container'>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  )
}
