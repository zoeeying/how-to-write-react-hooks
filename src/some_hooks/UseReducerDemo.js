import React, { useReducer } from 'react'

// 用于计算状态的Reducer函数
const myReducer = (state, action) => {
  switch (action.type) {
    case 'countUp':
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}

// 组件代码
export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(myReducer, { count: 0 })
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'countUp' })}>+1</button>
      <p>Count: {state.count}</p>
    </div>
  )
}
