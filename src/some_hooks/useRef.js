import React, { useRef, useState, useEffect } from 'react'
export default () => {
  // 用来获取DOM元素
  const inputElement = useRef()
  const textRef = useRef()
  // 用来保存变量
  const [text, setText] = useState('Zoe')

  useEffect(() => {
    textRef.current = text
    console.log('使用useRef保存了变量！', textRef.current)
  }, [text])

  const onClick = () => {
    inputElement.current.value = 'Hello, Zoe'
    console.log(inputElement)
  }

  return (
    <>
      <input ref={inputElement} />
      <button onClick={onClick}>按钮</button>
      <br />
      <br />
      <input value={text} onChange={(e) => { setText(e.target.value) }} />
    </>
  )
}