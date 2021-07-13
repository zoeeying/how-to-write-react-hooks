import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    console.log('页面加载了')
    return () => {
      console.log('页面卸载了')
    }
  }, [])
  return (
    <><h2>首页</h2></>
  )
}
const List = () => {
  return (
    <><h2>列表</h2></>
  )
}

export default () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>点击了 {count} 次</p>
      <button onClick={() => { setCount(prev => prev + 1) }}>点击</button>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
      </Router>
    </>
  )
}
