import React, {useState} from 'react'

export default () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  console.log('render')
  return (
    <div>
      {count}
      <button onClick={() => setCount(x => x+ 1)}>+1</button><br/>
      {count1}
      <button onClick={() => setCount1(x => x+ 1)}>+1</button>
    </div>
  )
}