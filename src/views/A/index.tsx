import c from './A.module.scss'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import actionTypes from './actions'
import React from 'react'

const A = (props: any) => {
  const dispatch = useDispatch()
  console.log('A props', props)
  const aClick = () => {
    dispatch({ type: actionTypes.TICK })
  }
  return (
    <div className={c.yellow}>
      <Button onClick={aClick}>A Click</Button>
    </div>
  )
}

export default React.memo(A)
