import React, { useState,useEffect, useLayoutEffect } from 'react'


export default () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log(`effect:`+ new Date().getTime())
  }, [])
  // 一般用不掉，比 useEffect先执行
  useLayoutEffect(()=>{
    console.log(`layoutEffect:`+ new Date().getTime())
  }, [])

  useEffect(() => {
   const I = setInterval(()=>{
     setCount(x => x+1)
   }, 1000)
   return () => {
     clearInterval(I)
   }
  }, [])
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}
