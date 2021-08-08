import { useState, useCallback } from 'react'

function CounterRenderProps({ render }) {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  return render({ count, increment, decrement })
}

export default function CounterRenderPropsExample() {
  return (
    <CounterRenderProps
      // render属性值是一个函数，在CounterRenderProps中调用
      render={({ count, increment, decrement }) => {
        return (
          <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
        )
      }}
    />
  )
}
