import React, {useContext} from 'react'
import HelloContext from './helloContext'

// HelloContext.Provider
// HelloContext.Comsumer


const {Provider}= HelloContext

const Desendants = () => {
  const value = useContext(HelloContext)
  return <div>{value}</div>
}


const Child = () =>{
  return <Desendants />
}

const Parent = () => {
  return <Provider value='hello'>
    <Child></Child>
  </Provider>
}

export default Parent