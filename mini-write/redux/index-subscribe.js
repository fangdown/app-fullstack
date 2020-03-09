/**
 * redux 状态存储
 *
 */
const reducer = require('./reducer')
const createStore = () => {
  let currentState = { count: 0 }
  let observers = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    observers.forEach(fn => fn())
  }
  function subscribe(fn) {
    observers.push(fn)
  }
  return { getState, dispatch, subscribe }
}

const store = createStore(reducer) //创建store
console.log(store.getState())
store.dispatch({ type: '@@REDUX_INIT' }) //初始化store数据

store.subscribe(() => {
  console.log('订阅者1')
})
store.subscribe(() => {
  console.log('订阅者2')
})
store.dispatch({ type: 'plus' })
console.log(store.getState())

module.exports = createStore
