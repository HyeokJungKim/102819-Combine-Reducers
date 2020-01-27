import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <div className="bordered">
        <Link to="/goats">Goats</Link>
          &nbsp;
        <Link to="/cakes">Cakes</Link>
      </div>
    );
  }
}

export default NavBar;
