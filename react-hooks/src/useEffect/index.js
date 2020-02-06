import React, {useState, useEffect} from 'react'

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const i = setTimeout(()=>{
      setCount(x => x+1)
    }, 1000)
    return () =>{
      clearTimeout(i)
      console.log(111)
    }
  },[])
  return (
   <div>{count}</div> 
  )
}