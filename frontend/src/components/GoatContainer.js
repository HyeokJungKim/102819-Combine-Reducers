import React from 'react';
import Goat from './Goat';
import GoatForm from './GoatForm'
// connect is a function
import {connect} from 'react-redux'

const GoatContainer = (props) => (
  <div>
    <h1>All Goats</h1>
    <ol>
      {props.goats.map(goatObj => <Goat goat={goatObj} key={goatObj.id} />)}
    </ol>
    <GoatForm/>

  </div>
);

// MSTP needs to return a JavaScript {}
// That JavaScript {} will become Props for the component
const mapStateToProps = (state) => {
  return {
    goats: state.goatInfo.goats
  }
}


let funcName = connect(mapStateToProps)
let magicalComponent = funcName(GoatContainer)
export default magicalComponent










// export default connect(howYouGetState, howYouSetState)(GoatContainer)
