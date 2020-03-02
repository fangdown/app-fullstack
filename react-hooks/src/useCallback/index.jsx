import React, { useState, useCallback } from 'react'


export default () => {
  const [count, setCount] = useState(0)
  // useCallback的目的是解决一些性能问题
  const inc = useCallback(() => {
    console.log(count)
    setCount(count + 1) // 只加1次
    // setCount(x => x+1) 一直+1
  }, [])
  console.log('render')
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>提交</button>
    </div>
  )
}
