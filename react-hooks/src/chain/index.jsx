import React,{useState, useEffect} from 'react'

const Child = (props, ref) =>{
  useState(1)
  useState(2)
  useState(3)

  useEffect(()=>{
    console.log('a')
  })
  useEffect(()=>{
    console.log('b')
  })
  useEffect(()=>{
    console.log('c')
  })
  return null
}

export default class Chain extends React.Component{
  componentDidMount(){
    const childFiberNode = this._reactInternalFiber.child
    console.log(childFiberNode.elementType)
    console.log(childFiberNode.memoizedState)
    console.log(childFiberNode.updateQueue)
    setTimeout(()=>{
      console.log(this)
      debugger
    })
  }
  render(){
    return  <div>
      chain
      <Child/>
    </div>
    
  }
}