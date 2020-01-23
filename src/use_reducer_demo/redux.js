import React, { createContext, useReducer } from 'react'

// Context对象
export const ColorContext = createContext({})

// 改变状态的操作
export const UPDATE_COLOR = "UPDATE_COLOR"

// reducer函数
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

// 包裹起来的组件可以共享Context对象
export const Color = props => {
  const [color, dispatch] = useReducer(reducer, 'blue')
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
}