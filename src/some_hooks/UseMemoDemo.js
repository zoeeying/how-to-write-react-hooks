import React, { useState, useMemo } from 'react'

export default function UseMemoDemo() {
  const [button1, setButton1] = useState('我是button1')
  const [button2, setButton2] = useState('我是button2')
  return (
    <>
      <button
        onClick={() => {
          setButton1(`${new Date().getTime()}button1改变了`)
        }}
      >
        button1
      </button>
      <button
        onClick={() => {
          setButton2(`${new Date().getTime()}button2改变了`)
        }}
      >
        button2
      </button>
      <Child button1={button1} button2={button2} />
    </>
  )
}

const Child = ({ button1, button2 }) => {
  const button1Change = tmp => {
    console.log('button1不变化，button2变化，子组件是否重复渲染了？？？？？')
    return tmp
  }

  // 只有button1变化了才会执行button1Change方法
  const renderButton1 = useMemo(() => {
    button1Change(button1)
  }, [button1])

  return (
    <>
      {/* <div>{button1Change(button1)}</div> */}
      <div>{renderButton1}</div>
      <div>{button2}</div>
    </>
  )
}
