import { createStore } from 'redux'

// 定义Store的初始值
const initialState = { value: 0 }

// Reducer，处理Action返回新的 State
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/incremented':
      return {
        ...state, // 复制原有的数据结构
        value: state.value + 1,
      }
    case 'counter/decremented':
      return {
        ...state,
        value: state.value - 1,
      }
    default:
      return state
  }
}

// 利用Redux的API创建一个Store，参数就是Reducer
const store = createStore(counterReducer)

// Store提供了subscribe用于监听数据变化
store.subscribe(() => console.log(store.getState()))

// 计数器加1，用Store的dispatch方法分发一个Action，由Reducer处理
const incrementAction = { type: 'counter/incremented' }
store.dispatch(incrementAction)
// 监听函数输出：{value: 1}

// 计数器减1
const decrementAction = { type: 'counter/decremented' }
store.dispatch(decrementAction)
// 监听函数输出：{value: 0}
