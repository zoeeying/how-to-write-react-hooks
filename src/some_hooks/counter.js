// import React, { Component } from 'react'
// export default class Counter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//     }
//   }

//   addCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     })
//   }

//   render() {
//     return (
//       <>
//         <p>点击了 {this.state.count} 次</p>
//         <button onClick={this.addCount}>点击</button>
//       </>
//     )
//   }
// }

import React, { useState } from 'react'
export default function Counter(props) {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>点击了 {count} 次</p>
      <button
        onClick={() => {
          setCount(prev => prev + 1)
        }}
      >
        点击
      </button>
    </>
  )
}
