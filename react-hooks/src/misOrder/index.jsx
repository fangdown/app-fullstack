import React, { useState,useEffect } from 'react'

function Greatings() {
  return (
    <div>hello, greate</div>
  )
}

export default () => {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(false)
  // 错误递归
  // React limits the number of renders to prevent an infinite loop.
  // if(count >1){
  //   setDisplay(x => x = true)
  // }

  // 通过hook顺序判断，如果hook不一样就会报错， 假如if 会有不可预知性错误
  // Rendered more hooks than during the previous render.
  // if(count >1){
  //   useEffect(() => {
  //     setDisplay(x =>x = true)
  //   }, [])
  // }
  // else {
  //   useEffect(() => {
  //     setDisplay(x => x = false)
  //   })
  // }

  // right
  useEffect(() => {
    if(count > 1){
      setDisplay(x =>x = true)
    }
  }, [count > 1])
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(x => x + 1)}>+1</button>
      {display && <Greatings />}
    </div>
  )
}
