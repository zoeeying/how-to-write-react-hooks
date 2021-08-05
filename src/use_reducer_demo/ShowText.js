import { useContext } from 'react'
import { ColorContext } from './redux'

export default function ShowText() {
  const { color } = useContext(ColorContext)
  return <div style={{ color }}>我是什么颜色的呀？</div>
}
