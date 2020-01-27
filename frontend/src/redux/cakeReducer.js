const initialState = {
  cakes: []
}

const cakeReducer = (state = initialState, action) => {

  switch (action.type) {

    case "SET_ALL_GOATS":
      return {
        ...state,
        cakes: ["Yummmy"]
      }
    default:
      return state

  }
}

export default cakeReducer
