// THUNKY STUFF

export const actionCreatorName = () => {
  return (dispatch) => {
    // do fetchy stuff here
    // .then(res => res.json())
    // .then(response => {
    //   dispatch(actionCreator(response))
    // })
  }
}

export const fetchAndSetGoats = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/goats")
    .then(r => r.json())
    .then((goatArr) => {
      dispatch(setAllGoats(goatArr))
    })
  }
}


// addGoat is a function whose job is to return {ACTION}

// 1) Write action creator
// 2) Import to the component you want to use
// 3) Put in {actionCreator} as your second argument
// 4) In your component, invoke `this.props.actionCreator`

export const addGoat = (newGoat) => {
  return {
    type: "ADD_GOAT",
    payload: newGoat
  }
}

export const setAllGoats = (arrOfGoats) => {
  return {
    type: "SET_ALL_GOATS",
    payload: arrOfGoats
  }
}
