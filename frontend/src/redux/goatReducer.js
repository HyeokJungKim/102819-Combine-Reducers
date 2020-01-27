const initialState = {
  goats: [],
  displayedGoat: {}
}

// The Return value of a reducer becomes the new state
const goatReducer = (state = initialState, action) => {

  switch (action.type) {

    case "ADD_GOAT":
      return {
        ...state,
        goats: [action.payload, ...state.goats ]
      }

    case "SET_ALL_GOATS":
      return {
        ...state,
        goats: [...action.payload]
      }

    default:
      return state

  }
}

export default goatReducer
