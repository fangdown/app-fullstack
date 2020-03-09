/**
 * redux 状态存储
 *
 */
export const createStore = () => {
  let currentState = {}
  function getState() {
    return currentState
  }
  function dispatch() {}
  function subscribe() {}
  return { getState, dispatch, subscribe }
}
