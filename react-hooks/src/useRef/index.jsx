import React, {useState, useEffect, useRef, forwardRef,useImperativeHandle} from 'react'


const Input = (props, ref) =>{
  const refInput = useRef()

  useImperativeHandle(ref, ()=>({
    focus:()=>{
      refInput.current.focus()
    }
  }), [])
  useEffect(() =>{
    console.log(`value change`, props.value)
    refInput.current.value = props.value
  }, [props.value])
  return (<input onChange={(e)=>props.onChange(e.target.value)} ref={refInput} />)
}

const MInput = forwardRef(Input)

export default (props) => {
  const [value,setValue] = useState('')
  const r1 = useRef()
  const r2 = useRef()

  useEffect(() => {
    console.log('component did mount')
    return () => {
      console.log('component did mount')
    }
  },[props.value])
  return (
   <div>useRef

     {/* <Input value= {value} /> */}
     <MInput
      ref={r1}
      value={value}
      onChange={(x) =>console.log(`1:${x}`)}
     />
     <button onClick={()=>setValue(x => Math.random())}>点击</button>
     <button onClick={()=>r1.current.focus()}>焦点</button>
   </div> 
  )
}