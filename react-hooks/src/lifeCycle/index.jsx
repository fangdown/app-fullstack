import React, {useState, useEffect} from 'react'


const Input = (props) =>{
  useEffect(() =>{
    console.log(`value change`)
  }, [props.value])
  return (<input />)
}
export default (props) => {
  const [value,setValue] = useState('')
  useEffect(() => {
    console.log('component did mount')
    return () => {
      console.log('component did mount')
    }
  },[props.value])
  return (
   <div>lifeCycle

     <Input value= {value} />
     <button onClick={()=>setValue(x => Math.random())}>点击</button>
   </div> 
  )
}