export default function reducer(
  state = {
    testing: true
  }, action ) {
  switch (action.type) {
    case "TESTING": {
      return {...state, testing: action.payload}
    }
  }
  return state
}