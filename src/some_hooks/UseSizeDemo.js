import React, { useState, useEffect, useCallback } from 'react'

// 自定义Hook
const useSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return size
}

export default () => {
  const size = useSize()
  return (
    <>
      <div>页面宽度：{size.width}</div>
      <div>页面高度：{size.height}</div>
    </>
  )
}