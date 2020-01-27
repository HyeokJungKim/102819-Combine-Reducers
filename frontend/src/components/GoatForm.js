import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addGoat} from '../redux/actions'

class GoatForm extends Component {

  state={
    name: "",
    tail_length: 0
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let newGoat = {...this.state, id: 23}
    this.props.addGoat(newGoat);
  }


  render() {
    console.log(this.props);
    let {name, tail_length} = this.state
    return (
      <>
        <h1>Goat Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="goatName">Goat Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            id="goatName"
          />

          <label htmlFor="goatTail">Tail Length</label>
          <input
            onChange={this.handleChange}
            type="number"
            name="tail_length"
            value={tail_length}
            autoComplete="off"
            id="goatTail"
          />

        <input type="submit" value="Submit"/>
        </form>
      </>
    );
  }


}

// MDTP needs to return a JavaScript {}
// That JavaScript {} will become Props for the component
// Your values for that POJO will most likely be function definitions
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addGoat: (newGoatObject) => { dispatch( {type: "ADD_GOAT", payload: newGoatObject} ) }
//   }
// }

export default connect(null, { addGoat })(GoatForm);

























//
