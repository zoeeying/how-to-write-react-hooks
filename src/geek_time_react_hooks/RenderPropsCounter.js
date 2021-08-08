import { useState, useCallback } from 'react'

// 使用render props设计模式来做数据逻辑重用，其实使用Hooks更适合
function CounterRenderProps({ children }) {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  // 不render任何UI的组件
  return children({ count, increment, decrement })
}

export default function CounterRenderPropsExample() {
  return (
    <CounterRenderProps>
      {
        // 把下面的函数作为children属性传递给CounterRenderProps组件
        ({ count, increment, decrement }) => {
          return (
            <div>
              <button onClick={decrement}>-</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </div>
          )
        }
      }
    </CounterRenderProps>
  )
}
