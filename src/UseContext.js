// Context可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树
// {theme: 'light'}为defaultValue，只有当组件所处的树中没有匹配到Provider时，defaultValue参数才会生效，这有助于在不使用Provider包装组件的情况下对组件进行测试
// 注意：将undefined传递给Provider时，消费组件的defaultValue不会生效
import React, { createContext } from 'react'
import { Button } from 'antd'
const ThemeContext = createContext({ theme: 'light' }) // 建立一个Context对象

export default class UseContext extends React.Component {
  render () {
    // AppContext.Provider提供了一个Context对象，这个对象可以被子组件共享
    // 使用一个Provider来将当前的theme传递给下面的组件树，无论多深，任何组件都能读取这个值
    return (
      <ThemeContext.Provider value={{ theme: 'dark' }}>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

// 中间的组件再也不必指明往下传递theme了
function Toolbar (props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  // 指定contextType读取当前的Context对象
  // 当React渲染一个订阅了这个Context对象的组件，这个组件会从组件树中离自身最近的那个匹配的Provider中读取到当前的Context值
  static contextType = ThemeContext
  render () {
    // 注意是通过this.context读取当前的Context值
    return <Button theme={this.context}>按钮 </Button>
  }
}