
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch,Link} from "react-router-dom";
const Item1=(props)=>(
    <div>
    <h3>A things i have done</h3>
    <p>this page is for the item with id {props.match.params.id}</p>
    </div>
);
const Item2=(props)=>(
    <div>
    <h3>A things i have done</h3>
    <p>this page is for the item with id {props.match.params.id}</p>
    </div>
);
export default class PortFolio extends Component {
  render() {
    return (
      <div>
      <h3>My work</h3>
      <p>Checkout the following thinhs i have done </p>
      <Link to="portfolio/1">Item1</Link>
      <Link to="portfolio/2">Item2</Link>

      </div>
    )
  }
}
