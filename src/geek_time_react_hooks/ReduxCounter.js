import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function Counter() {
  // 从state中获取当前的计数值
  const count = useSelector(state => state.value)

  // 获得当前store的dispatch方法
  const dispatch = useDispatch()

  // 在按钮的click时间中去分发action来修改 store
  return (
    <div>
      <button onClick={() => dispatch({ type: 'counter/incremented' })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'counter/decremented' })}>-</button>
    </div>
  )
}
