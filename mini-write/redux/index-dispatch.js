/**
 * redux 状态存储
 *
 */
const reducer = require('./reducer')
const createStore = () => {
  let currentState = { count: 0 }
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
  }
  function subscribe() {}
  return { getState, dispatch, subscribe }
}

const store = createStore(reducer) //创建store
console.log(store.getState())
store.dispatch({ type: '@@REDUX_INIT' }) //初始化store数据
store.dispatch({ type: 'plus' })
console.log(store.getState())

export default createStore
