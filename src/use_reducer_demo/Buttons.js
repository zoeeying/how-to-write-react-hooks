import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './redux'
export default () => {
  const { dispatch } = useContext(ColorContext)
  return (
    <>
      <button
        onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'red' }) }}
      >红色</button>
      <button
        onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'green' }) }}
      >绿色</button>
    </>
  )
}