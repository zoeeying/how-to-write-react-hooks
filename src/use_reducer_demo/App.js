import React from 'react'
import Buttons from './Buttons'
import ShowText from './ShowText'
import { Color } from './redux'

export default () => {
  return (
    <Color>
      <ShowText />
      <Buttons />
    </Color>
  )
}
