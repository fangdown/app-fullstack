const initState = {
  count: 0
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'plus':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

module.exports = reducer
