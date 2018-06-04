import React, { Component } from 'react'
import { NavLink} from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div>
        <h3>Portfolio!</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> <br/>
        <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink><br/>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink><br/>
        <hr/>
      </div>
    )
  }
}
