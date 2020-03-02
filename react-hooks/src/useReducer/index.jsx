import React, { useReducer } from 'react'
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
      break;
    case 'decrement':
      return { count: state.count - 1 }
      break;
    default:
      break;
  }
}
// function useMyReducer(){
//   const [state, dispatch] = useReducer(reducer, initialState)
//   function myDispatch(){
//     if(action ==='url'){
//       fetch(action).then(data => {
//         dispatch({
//           type: 'xxx',
//           data
//         })
//       })
//     }
//   }
//   return [state, myDispatch]
// }
export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // 异步处理思路
  // const [state, dispatch] = useMyReducer(reducer, initialState)
  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}
