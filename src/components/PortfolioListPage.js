
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch,Link} from "react-router-dom";
export default class PortFolioListPage extends Component {
    render() {
      return (
        <div>
        <h3>A things i have done k</h3>
        <p>the page is for the  id with {this.props.match.params.id}</p>
  
        </div>
      )
    }
  }