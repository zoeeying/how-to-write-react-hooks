import React, { useState, useMemo } from 'react'

export default function UseMemoDemo2() {
  const [num, setNum] = useState(0)

  const expensiveFn = () => {
    let result = 0
    for (let i = 0; i < 100000; i++) {
      result += i
    }
    console.log(result)
    return result
  }

  const base = useMemo(expensiveFn, [])

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + base)}>+1</button>
    </div>
  )
}
